import * as types from './timeTracker.type';
import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'));

export const getTrackerAPI = ()=> async (dispatch)=> {
    dispatch({type: types.GET_TIME_LOADING});
    try{
      const res = await axios.get('https://clockify-api.herokuapp.com/task', {
        headers: {
          authorization: `brearer ${token}`
        }});     
      dispatch({type: types.GET_TIME_SUCCESS, payload: res.data});
    }catch (err){
        console.log(err);
        dispatch({type: types.GET_TIME_ERROR});
    }
}

export const postTrackerAPI = (data)=> async (dispatch)=> {
  try{
    const res = await axios.post('https://clockify-api.herokuapp.com/task/create', data, {
      headers: {
        authorization: `brearer ${token}`
      }});  
    dispatch(getTrackerAPI());
  }catch (err){
      console.log(err);
  }
}

export const patchTrackerAPI = (id, data)=> async (dispatch)=> {
    try{
      const res = await axios.patch(`https://clockify-api.herokuapp.com/task/update${id}`, data, {
        headers: {
          authorization: `brearer ${token}`
        }});     
      dispatch(getTrackerAPI());
    }catch (err){
        console.log(err);
    }
}
  
export const deleteTrackerAPI = (id)=> async (dispatch)=> {
  try{
    const res = await axios.delete(`https://clockify-api.herokuapp.com/task/delete/${id}`, {
      headers: {
        authorization: `brearer ${token}`
      }});    
    dispatch(getTrackerAPI());
  }catch (err){
      console.log(err);
  }
}

/*
  
  trackerBillable: billable,
  trackerName: name,
  trackerProject: projectName,
  trackerTag: tag,
  trackertime1: startAt,
  trackertime2: endAt,
  trackerDate: date,
  trackertime3: stopAt,  

*/