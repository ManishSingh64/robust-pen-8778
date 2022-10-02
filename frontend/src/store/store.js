<<<<<<< HEAD
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { trackerReducer } from './TimeTracker/timeTracker.reducer';

const rootReducer = combineReducers({
    tracker: trackerReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
=======
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as taskReducer } from "./Tasks/tasks.reducer";
// import { reducer as authReducer } from "./Auth/auth.reducer";

const rootReducer = combineReducers({
//   authReducer,
  taskReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> master
