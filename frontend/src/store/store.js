import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { trackerReducer } from './TimeTracker/timeTracker.reducer';
import { reducer as taskReducer } from "./Tasks/tasks.reducer";

const rootReducer = combineReducers({
    tracker: trackerReducer,
    task: taskReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
