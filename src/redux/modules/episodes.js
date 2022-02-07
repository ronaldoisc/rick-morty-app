import { customeFetch } from "../../helpers/fetch"
import { finishLoading, startLoading } from "./ui"
//I´M USING DUCKS PATTERN
//TYPES
export const types = {
    load: 'rick-morty-app/episodes/load',
    loadEpisodesByType:'rick-morty-app/episodes/loadEpisodesByName',
    
}

//INITIALSTATE
const initialState = {
    loading: true,
    list: []
}


//REDUCER
export const episodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.load:

            return {
                ...state,
                list: [...action.payload]
            }
        case types.loadEpisodesByType:
            return {
                list:action.payload
            }

        default:
            return state;
    }
}


export const startLoadingEpisodes = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoading());
            const resp = await customeFetch('episode');
            const body = await resp.json();
            dispatch(loadEpisodes(body.results));
            dispatch(finishLoading());

        } catch (error) {

        }
    }
}

export const startLoadingEpisodesByName=(type,name)=>{
    return async(dispatch)=>{
        dispatch(startLoading());
          const resp=await customeFetch(`episode/?${type}=${name}`);
          const body=await resp.json();
          dispatch(loadEpisodesByName(body.results));
          dispatch(finishLoading());
    }

}

//ACTIONS CREATORS
const loadEpisodes = (episodes) => ({
    type: types.load,
    payload: episodes
});

const loadEpisodesByName=(episodes)=>({
    type:types.loadEpisodesByType,
    payload:episodes
})