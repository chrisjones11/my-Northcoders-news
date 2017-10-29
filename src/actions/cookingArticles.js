import axios from 'axios';
import * as types from './types';

const API_URL = 'http://localhost:3000/api';


export const fetchCookingArticlesRequest = () => ({
  type: types.FETCH_COOKINGARTICLES_REQUEST
});

export const fetchCookingArticlesSuccess = (data) => ({
  type: types.FETCH_COOKINGARTICLES_SUCCESS,
  payload: data
});

export const fetchCookingArticlesFailure = (error) => ({
  type: types.FETCH_COOKINGARTICLES_FAILURE,
  payload: error
});

export default () => {
  return (dispatch) => {
    dispatch(fetchCookingArticlesRequest());
    return axios.get(`${API_URL}/topics/cooking/articles`)
      .then(res => {
        dispatch(fetchCookingArticlesSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchCookingArticlesFailure(error.message));
      });
  };
};
