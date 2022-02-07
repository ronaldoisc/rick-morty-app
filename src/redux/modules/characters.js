import { customeFetch } from "../../helpers/fetch"
import { finishLoading, startLoading } from "./ui"

//I'M USING DUCKS PATTERN

//TYPES
export const types = {
    load: 'rick-morty-app/characters/load',
    loadCharacterByType: 'rick-morty/characters/loadCharacterByType',
    setActiveCharacter: 'rick-morty/characters/setActiveCharacter',
    setActiveSearch: 'rick-morty/characters/setActiveSearch',
    characterEpisodes:'rick-morty/characters/characterEpisodes'
}
//INITIALSTATE
const initialState = {
    data: {},
    activeCharacter: {},
    activeSearch: {
        type: null,
        name: null
    },
    characterEpisodes:[],
    loading: true
}

//REDUCER
export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.load:
            return {
                ...state,
                data: { ...action.payload }
            }
        case types.loadCharacterByType: {
            return {
                ...state,
                data: { ...action.payload }
            }
        }
        case types.setActiveSearch: {
            return {
                ...state,
                activeSearch: action.payload
            }
        }
        case types.setActiveCharacter:
            return {
                ...state,
                activeCharacter: action.payload
            }
        case types.characterEpisodes:
            return {
                ...state,
                characterEpisodes:[...state.characterEpisodes,action.payload]
            }
        default:
            return state;
    }
}

export const startLoadingCharacters = (page = 1) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const resp = await customeFetch(`character?page=${page}`, {}, 'GET');
        const body = await resp.json();
        dispatch(loadCharacters(body))
        dispatch(finishLoading());
    }
};
export const startSearchCharacterByName = (type, name, page) => {

    return async (dispatch) => {
        try {
            dispatch(startLoading());
            const resp = await customeFetch(`character/?${type || 'name'}=${name}&page=${page}`);
            const body = await resp.json();

            dispatch(loadCharacterByType(body))
            dispatch(activeSearch(type, name));
            dispatch(finishLoading());

        } catch (error) {
            console.log(error);
        }

    }
}

export const startLoadingCharacterById = (characterId) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const resp = await customeFetch(`character/${characterId}`);
        const body = await resp.json();
     
        body.episode.map(epi=>{
             const epiId=epi.split('/')[5];
           return dispatch(startLoadingCharactersEpisodeById(epiId))
        });

        dispatch(setActiveCharacter(body));
        dispatch(finishLoading());
    }
}

export const startLoadingCharactersEpisodeById=(episodeId)=>{
    return async(dispatch)=>{
        dispatch(startLoading());
        const resp=await customeFetch(`episode/${episodeId}`);
        const body=await resp.json();
       dispatch(loadCharacterEpisodes(body));
       dispatch(finishLoading());
    }
 }

//ACTIONS CREATORS
const loadCharacters = (characters) => ({
    type: types.load,
    payload: characters

});

const loadCharacterByType = (characters) => ({
    type: types.loadCharacterByType,
    payload: characters
})

const setActiveCharacter = (character) => ({
    type: types.setActiveCharacter,
    payload: character

});


const activeSearch = (type, name) => ({
    type: types.setActiveSearch,
    payload: {
        type,
        name
    }
});

const loadCharacterEpisodes=(episode)=>({
    type:types.characterEpisodes,
    payload:episode
})


