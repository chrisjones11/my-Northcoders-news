import axios from 'axios';
import * as types from './types';

const API_URL = 'http://localhost:3000/api';

export const fetchCommentsRequest = () => ({
  type: types.FETCH_COMMENTS_REQUEST
});

export const fetchCommentsSuccess = (data) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: data
});

export const fetchCommentsFailure = (error) => ({
  type: types.FETCH_COMMENTS_FAILURE,
  payload: error
});

export default () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    return axios.get(`${API_URL}/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data.comments));
      })
      .catch(error => {
        dispatch(fetchCommentsFailure(error.message));
      });
  };
};
