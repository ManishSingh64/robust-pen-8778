import { getItem } from "../../Utils/localStorage";
import * as types from "./tasks.actionTypes";
import axios from "axios";

export const createProject = (payload) => (dispatch) => {
  const token = getItem("token");
  console.log(token);
  dispatch({ type: types.CREATE_PROJECT_REQUEST });
  return axios
    .post(`https://clockify-api.herokuapp.com/project/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: types.CREATE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.CREATE_PROJECT_FAILURE, err });
    });
};

export const getProjects = () => async (dispatch) => {
  const user = getItem("user");
  console.log(user);
//   const token = getItem("token");
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvdXNoYW5AZ21haWwuY29tIiwidXNlcklkIjoiNjMzODJmMGQ2M2RiNzI1YmI4MmUyYzdkIiwiaWF0IjoxNjY0NjI3MjM4fQ.-AZ2scdwIk3JmMsPC_ZPtvWRFdFpObs4aXi78u2e4dk"
 
  dispatch({ type: types.GET_PROJECT_REQUEST });
   return await axios
    .get(`https://clockify-api.herokuapp.com/project`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
        console.log(res,'tees')
      dispatch({ type: types.GET_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PROJECT_FAILURE });
    });
};

export const deleteProject = (id) => (dispatch) => {
  const token = getItem("token");
  dispatch({ type: types.DELETE_PROJECT_REQUEST });
  return axios
    .delete(`https://clockify-api.herokuapp.com/project/delete/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.DELETE_PROJECT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_PROJECT_FAILURE });
    });
};

 
