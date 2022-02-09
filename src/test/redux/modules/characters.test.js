import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { characterReducer,startLoadingCharacters, types } from "../../../redux/modules/characters";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {
    data: {},
    activeCharacter: {},
    activeSearch: { type: null, name: null },
    characterEpisodes: [],
}
let store = mockStore(initialState)
describe('test in the characters module', () => {
    beforeEach(() => {
        store = mockStore(initialState);
       
    })
    test('types should be equals', async () => {
        expect(types).toEqual({
            load: 'rick-morty-app/characters/load',
            loadCharacterByType: 'rick-morty/characters/loadCharacterByType',
            setActiveCharacter: 'rick-morty/characters/setActiveCharacter',
            setActiveSearch: 'rick-morty/characters/setActiveSearch',
            characterEpisodes: 'rick-morty/characters/characterEpisodes'
        })
    });

    test('should return the default state', async () => {
        const state = characterReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('should set all characters data', async () => {

        const action = {
            type: types.load,
            payload: {
                info: {},
                results: [
                    {
                        id: 1,
                        name: 'Rick Sanchez',
                        status: 'Alive',
                        species: 'Human',
                        type: '',
                        gender: 'Male',
                    },

                ]
            }
        }
        const state = characterReducer(initialState, action);
        expect(state).toEqual({
            data: {
                info: {

                },
                results: [
                    {
                        id: 1,
                        name: 'Rick Sanchez',
                        status: 'Alive',
                        species: 'Human',
                        type: '',
                        gender: 'Male',
                    },
                ]
            },
            activeCharacter: {},
            activeSearch: { type: null, name: null },
            characterEpisodes: []
        })
    });

    test('should return a active character', async () => {
        const action = {
            type: types.setActiveCharacter,
            payload: {
                id: 1,
                name: 'Rick Sanchez',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                    name: 'Earth (C-137)',
                    url: 'https://rickandmortyapi.com/api/location/1'
                },
                location: {
                    name: 'Citadel of Ricks',
                    url: 'https://rickandmortyapi.com/api/location/3'
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/1',
                ],
                url: 'https://rickandmortyapi.com/api/character/1',
                created: '2017-11-04T18:48:46.250Z'
            },
        }
        const state = characterReducer(initialState, action);
        expect(state).toEqual({
            data: {},
            activeCharacter: {
                id: 1,
                name: 'Rick Sanchez',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                    name: 'Earth (C-137)',
                    url: 'https://rickandmortyapi.com/api/location/1'
                },
                location: {
                    name: 'Citadel of Ricks',
                    url: 'https://rickandmortyapi.com/api/location/3'
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                episode: [
                    'https://rickandmortyapi.com/api/episode/1',
                ],
                url: 'https://rickandmortyapi.com/api/character/1',
                created: '2017-11-04T18:48:46.250Z'
            },
            activeSearch: { type: null, name: null },
            characterEpisodes: [],

        })
    });


    test('startLoadingCharacters should load all characters', async () => {
        await store.dispatch(startLoadingCharacters());
        const actions = store.getActions();
        expect(actions[1]).toEqual({
            type: types.load,
            payload: {info: expect.any(Object),results: expect.any(Array)}
        })

    });

});
