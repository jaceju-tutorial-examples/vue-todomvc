import store from 'src/store';
import chai from 'chai';

chai.should();

describe('Store', () => {
  it('應可從 localStorage 中取得資料', () => {
    // arrange
    const STORAGE_KEY = 'vue-todomvc';
    const expected = ['test'];
    localStorage.setItem(STORAGE_KEY, '["test"]');

    // act
    const actual = store.fetch();

    // assert
    actual.should.to.deep.equal(expected)
  });
});
