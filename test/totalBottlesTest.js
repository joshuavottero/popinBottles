const assert = require('chai').assert;
const {totalBottles} = require('../totalBottles');

describe("total bottles from # of dollars", () => {
  it("10 dolars should return 15 bottles in total", () => {
    assert.strictEqual(15, totalBottles(10));
  })

  
  it("20 dolars should return 35 bottles in total", () => {
    assert.strictEqual(35, totalBottles(20));
  })
  
  
  
  it("30 dolars should return 55 bottles in total", () => {
    assert.strictEqual(55, totalBottles(30));
  })
  
  
  
  it("40 dolars should return 75 bottles in total", () => {
    assert.strictEqual(75, totalBottles(40));
  })
})

