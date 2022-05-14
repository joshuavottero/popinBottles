const assert = require('chai').assert;
const {bottlesBreakDown} = require('../bottlesBreakDown');

describe("total bottles", () => {
  it("40 dollar invistment should return\n TOTAL BOTTLES: 75\n REMAINING BOTTLES: 1\n REMAING CAPS: 3\n TOTAL EARNED: \n  Bottles: 37 \n  CAPS: 18 ", () => {
    expected = "TOTAL BOTTLES: 75\nREMAINING BOTTLES: 1\nREMAING CAPS: 3\nTOTAL EARNED:\n  Bottles: 37 \n  CAPS: 18";
    assert.strictEqual(expected, bottlesBreakDown(75, 1, 3, 37, 18));
  })
})

