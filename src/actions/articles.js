import axios from 'axios';
import * as types from './types';

const API_URL = 'https://northcoders-news-api.herokuapp.com/api';

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

export default () => {
  return (dispatch) => {
    // daryl quickly sudo coded this saying i need to pass in topic
    // but i dont where to get topic from and where to put it
    // const url = topic ? `${API_URL}/topics/${topic}/articles` : `${API_URL}/articles`;
    dispatch(fetchArticlesRequest());
    return axios.get(`${API_URL}/articles`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error.message));
      });
  };
};
