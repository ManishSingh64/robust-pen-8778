import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { trackerReducer } from './TimeTracker/timeTracker.reducer';

const rootReducer = combineReducers({
    tracker: trackerReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));