import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { characterReducer } from './modules/characters';
import { episodeReducer } from './modules/episodes';
import { uiReducer } from './modules/ui';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui: uiReducer,
    character: characterReducer,
    episodes: episodeReducer

});


export let store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk))
);