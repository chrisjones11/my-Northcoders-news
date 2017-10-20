import {expect} from 'chai';
import commentsReducer, {initialState} from '../src/reducers/comments';
import {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure
} from '../src/actions/comments';

describe('comments reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = {type: 'whatever'};
      const newState = commentsReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = {type: 'whatever'};
      const newState = commentsReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_COMMENTS_REQUEST', () => {
    const action = fetchCommentsRequest();
    const newState = commentsReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles FETCH_ARTICLES_SUCCESS', () => {
    const prevState = commentsReducer(undefined, fetchCommentsRequest());
    const action = fetchCommentsSuccess([1, 2, 3]);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([1, 2, 3]);
  });
  it('handles FETCH_COMMENTS_FAILURE', () => {
    const prevState = commentsReducer(undefined, fetchCommentsRequest());
    const error = 'Something went wrong';
    const action = fetchCommentsFailure(error);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
