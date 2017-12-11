import axios from 'axios';
import * as types from './types';

// const API_URL ='https://ncnewsbe.herokuapp.com/api';

const API_URL = 'http://northcoders-news-api.herokuapp.com/api';

export const fetchArticleCommentsRequest = () => ({
  type: types.FETCH_ARTICLE_COMMENTS_REQUEST
});

export const fetchArticleCommentsSuccess = (data) => ({
  type: types.FETCH_ARTICLE_COMMENTS_SUCCESS,
  payload: data
});

export const fetchArticleCommentsFailure = (error) => ({
  type: types.FETCH_ARTICLE_COMMENTS_FAILURE,
  payload: error
});

export default (articleId) => {
  return (dispatch) => {

    let url = `${API_URL}/articles/${articleId}/comments`;

    // const url = topic !== '/' ? `${API_URL}/topics${topic}/articles` : `${API_URL}/articles`;

    console.log(`${API_URL}/topics${articleId}/articles`);

    dispatch(fetchArticleCommentsRequest());
    return axios.get(url)
      .then(res => {
        dispatch(fetchArticleCommentsSuccess(res.data.comments));
      })
      .catch(error => {
        dispatch(fetchArticleCommentsFailure(error.message));
      });
  };
};
