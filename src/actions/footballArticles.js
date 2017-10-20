import axios from 'axios';
import * as types from './types';

const API_URL = 'https://northcoders-news-api.herokuapp.com/api';


export const fetchFootballArticlesRequest = () => ({
  type: types.FETCH_FOOTBALLARTICLES_REQUEST
});

export const fetchFootballArticlesSuccess = (data) => ({
  type: types.FETCH_FOOTBALLARTICLES_SUCCESS,
  payload: data
});

export const fetchFootballArticlesFailure = (error) => ({
  type: types.FETCH_FOOTBALLARTICLES_FAILURE,
  payload: error
});

export default () => {
  return (dispatch) => {
    dispatch(fetchFootballArticlesRequest());
    return axios.get(`${API_URL}/topics/football/articles`)
      .then(res => {
        dispatch(fetchFootballArticlesSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchFootballArticlesFailure(error.message));
      });
  };
};
