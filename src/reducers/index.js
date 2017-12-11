import {combineReducers} from 'redux';

import test from './test';
import articles from './articles';
import comments from './comments';

const reducer = combineReducers({
  test, articles, comments
});

export default reducer;