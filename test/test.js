const assert = require('assert');
const sum = require('../sum');

describe('Sum Function', function() {
  it('should return 3 when the arguments are 1 and 2', function() {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('should return 0 when the arguments are 1 and -1', function() {
    assert.strictEqual(sum(1, -1), 0);
  });
});
