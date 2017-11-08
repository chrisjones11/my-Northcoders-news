import axios from 'axios';
import * as types from './types';

const API_URL = 'http://northcoders-news-api.herokuapp.com/api';

export const fetchArticlesRequest = () => ({
  type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (data) => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload: data
});

export const fetchArticlesFailure = (error) => ({
  type: types.FETCH_ARTICLES_FAILURE,
  payload: error
});

export default (topic) => {
  return (dispatch) => {
    const url = topic !== '/' ? `${API_URL}/topics${topic}/articles` : `${API_URL}/articles`;
    console.log(`${API_URL}/topics${topic}/articles`);

    dispatch(fetchArticlesRequest());
    return axios.get(url)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error.message));
      });
  };
};
