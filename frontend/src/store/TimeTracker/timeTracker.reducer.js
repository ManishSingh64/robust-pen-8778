import * as types from './timeTracker.type';

const insialData = {
    loading: false,
    error: false,
    timeTrackerData: []
};

export const trackerReducer = (state= insialData, { type, payload}) => {
    switch(type) {
        case types.GET_TIME_LOADING : {
            return {
                ...state,
                loading: true,
                error: false
            }

        }
        case types.GET_TIME_ERROR : {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case types.GET_TIME_SUCCESS : {
            return {
                ...state,
                loading: false,
                error: false,
                timeTrackerData: payload
            }
        }

        default: return state;
    }
};