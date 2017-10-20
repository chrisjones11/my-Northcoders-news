import {expect} from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchComments, {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure
} from '../src/actions/comments';
  

const API_URL = 'https://northcoders-news-api.herokuapp.com/api';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('fetchAllComments', () => {
    it('dispatches FETCH_ALL_COMMENTS_SUCCESS when fetching comments reponds with 200 and data', () => {
      nock(API_URL)
        .get('/comments')
        .reply(200, { comments: [1, 2, 3] });
      
      const expectedActions = [
        fetchCommentsRequest(),
        fetchCommentsSuccess([1, 2, 3])
      ];

      const store = mockStore();

      return store.dispatch(fetchComments())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    it('dispatches FETCH_ALL_COMMENTS_FAILURE when fetching comments reponds with an error', () => {
      nock(API_URL)
        .get('/comments')
        .replyWithError({'message': 'error'});
      
      const expectedActions = [
        fetchCommentsRequest(),
        fetchCommentsFailure('error')
      ];

      const store = mockStore();

      return store.dispatch(fetchComments())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });
});
