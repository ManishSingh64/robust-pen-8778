import * as types from './timeTracker.type';
import axios from 'axios';

// const token = JSON.parse(localStorage.getItem('clockify-token'));
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWVAZ21haWwuY29tIiwidXNlcklkIjoiNjMzODFiMWE2M2RiNzI1YmI4MmUyYjE5IiwiaWF0IjoxNjY0NjIxMzY4fQ.ui3OP6yIJureg3yVUemnKa_NctU1q06Q1C2zKJI2nY4'
// task/create  task/update  task/delete

export const getTrackerAPI = ()=> async (dispatch)=> {
    dispatch({type: types.GET_TIME_LOADING});
    try{
      // const res = await axios.get('https://clockify-api.herokuapp.com/task', {
      //   headers: {
      //     authorization: `brearer ${token}`
      //   }});
      const res = await axios.get('http://localhost:8080/timer');
      // console.log("get",res)
      dispatch({type: types.GET_TIME_SUCCESS, payload: res.data});
    }catch (err){
        console.log(err);
        dispatch({type: types.GET_TIME_ERROR});
    }
}

export const postTrackerAPI = (data)=> async (dispatch)=> {
  try{
    // const res = await axios.post('https://clockify-api.herokuapp.com/task/create', data, {
    //   headers: {
    //     authorization: `brearer ${token}`
    //   }});
    const res = await axios.post('http://localhost:8080/timer', data)
    // console.log(res)
    dispatch(getTrackerAPI());
  }catch (err){
      console.log(err);
  }
}

export const patchTrackerAPI = (id, data)=> async (dispatch)=> {
    try{
      // const res = await axios.patch(`https://clockify-api.herokuapp.com/task/update${id}`, data, {
      //   headers: {
      //     authorization: `brearer ${token}`
      //   }});
      const res = await axios.patch(`http://localhost:8080/timer${id}`, data)
      console.log("post",res)
      dispatch(getTrackerAPI());
    }catch (err){
        console.log(err);
    }
}
  
export const deleteTrackerAPI = (id)=> async (dispatch)=> {
  try{
    // const res = await axios.delete(`https://clockify-api.herokuapp.com/task/delete/${id}`, {
    //   headers: {
    //     authorization: `brearer ${token}`
    //   }});
    const res = await axios.delete(`http://localhost:8080/timer/${id}`)
    console.log(res)
    dispatch(getTrackerAPI());
  }catch (err){
      console.log(err);
  }
}