const { includesJamo } = require('../src/includes-jamo.js');
const assert = require('assert');

describe('includes-jamo', function () {
  it('check if the string has a jamo', () => {
    assert.equal(includesJamo("가나다", "ㄱ"), true);
  });
});
