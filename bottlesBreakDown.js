const bottlesBreakDown = function (totalBottles, remainingBottles, remainingCaps, bottlesFromBottles, bottlesFromCaps) {
  return `TOTAL BOTTLES: ${totalBottles}\nREMAINING BOTTLES: ${remainingBottles}\nREMAING CAPS: ${remainingCaps}\nTOTAL EARNED:\n  Bottles: ${bottlesFromBottles} \n  CAPS: ${bottlesFromCaps}`
}

module.exports = {bottlesBreakDown}