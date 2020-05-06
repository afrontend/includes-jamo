const { includesJamo } = require('../src/includes-jamo.js');
const assert = require('assert');

describe('check if the string has a jamo', function () {
  it('hangul string, one JA', () => {
    assert.equal(includesJamo("가나다", "ㄱ"), true);
    assert.equal(includesJamo("가나다", "ㄴ"), true);
    assert.equal(includesJamo("가나다", "ㄷ"), true);
    assert.equal(includesJamo("가나다", "ㅁ"), false);
  });
});
