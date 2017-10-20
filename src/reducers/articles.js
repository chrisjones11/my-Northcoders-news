import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: []
};

export default (prevState = initialState, action) => {
  switch (action.type) {

  case types.FETCH_ARTICLES_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });

  case types.FETCH_ARTICLES_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });

  case types.FETCH_ARTICLES_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });

    // delete the rest below once topics inserted to function iinstead

  case types.FOOTBALLARTICLES_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });

  case types.FETCH_FOOTBALLARTICLES_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
    
  case types.FETCH_FOOTBALLARTICLES_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });

  case types.COOKINGARTICLES_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });

  case types.FETCH_COOKINGARTICLES_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
    
  case types.FETCH_COOKINGARTICLES_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
    
  default:
    return prevState;
  }
};
