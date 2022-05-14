const {bottlesBreakDown} = require('./bottlesBreakDown');

// returns # free sodas based on bottles recycled
const totalBottles = function(dolars) {
  const bottlesBought = Math.floor(Math.floor(dolars / 2));
  let currentBottles = bottlesBought;
  let bottlesGained = 0;
  let capsToRecycle = 0;
  let bottlesToRecycle = 0;

  let totalBottlesFromCaps = 0;
  let totalBottlesFromBottles = 0;

  while (currentBottles > 0) {
    // get bottles users get from recycling caps and bottles 
    bottlesFromCaps = Math.floor((currentBottles + capsToRecycle) / 4);
    bottlesFromBottles = Math.floor((currentBottles + bottlesToRecycle) / 2);

    // add to total bottles gained from caps/bottles
    totalBottlesFromCaps += bottlesFromCaps;
    totalBottlesFromBottles += bottlesFromBottles;

    // get remaining caps and bottles
    capsToRecycle = (currentBottles + capsToRecycle) % 4;
    bottlesToRecycle = (currentBottles + bottlesToRecycle) % 2; 

    // calclated currentBottles from bottles gained from caps and other bottles and add to total
    currentBottles = bottlesFromCaps + bottlesFromBottles;
    bottlesGained += currentBottles;
  }

  // get the total bottles gained from Recycleed caps and bottles
  const totalBottles = bottlesGained + bottlesBought; 

  // print a break down
  console.log(bottlesBreakDown(totalBottles, bottlesToRecycle, capsToRecycle, totalBottlesFromBottles, totalBottlesFromCaps));

  return totalBottles;
}

module.exports = {totalBottles}