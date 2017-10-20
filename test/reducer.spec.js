import {expect} from 'chai';
import reducer from '../src/reducers';

describe('reducer', () => {
  it('testing setup works', () => {
    expect(reducer).to.be.a('function');
  });
});