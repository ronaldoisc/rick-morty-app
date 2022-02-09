import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { finishLoading, startLoading, types, uiReducer } from "../../../redux/modules/ui";
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    loading: false
}
let store = mockStore(initialState)

describe('test in the ui module', () => {
    beforeEach(() => {
        store = mockStore(initialState);
    })
    test('types should be equal', async () => {

        expect(types).toEqual({
            startLoading: 'ricky-morty/ui/startLoading',
            finishLoading: 'ricky-morty/ui/finishLoading'
        })

    });

    test('should return the default state', async () => {
        const state = uiReducer(initialState, {});
        expect(state).toEqual({ loading: false })

    });

    test('should return true loading', async () => {

        const action = {
            type: types.startLoading
        }
        const state = uiReducer(initialState, action);
        expect(state).toEqual({ loading: true })
    });

    test('should return false loading', async () => {
        const action = {
            type: types.finishLoading
        }
        const state = uiReducer(initialState, action);
        expect(state).toEqual({ loading: false })
    });



    test('startLoading should create the action', async () => {
        await store.dispatch(startLoading());
        const actions=store.getActions();
        expect(actions[0]).toEqual({type:types.startLoading})
    });
    
    test('finishLoading should create the action', async () => {
        await store.dispatch(finishLoading());
        const actions=store.getActions();
        expect(actions[0]).toEqual({type:types.finishLoading})
    });
    

    



});
