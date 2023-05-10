enum Direction {
   FtoC,
   CtoF
}

function convertTemperature(temp: number, fromTo: Direction, precision = 3)
{
   return ((fromTo === Direction.FtoC) ?
      (temp - 32) * 5 / 9 :
      temp * 9 / 5 + 32).toPrecision(precision);
}

// console.log(`5C is ${convertTemperature(5, Direction.CtoF)}F`);
// console.log(`27C is ${convertTemperature(27, Direction.CtoF)}F`);
// console.log(`35C is ${convertTemperature(35, Direction.CtoF)}F`);
// console.log(`-10C is ${convertTemperature(-10, Direction.CtoF)}F`);

// console.log(`-10F is ${convertTemperature(-10, Direction.FtoC)}C`);
// console.log(`-10F is ${convertTemperature(-10, Direction.FtoC, 5)}C`);
module.exports = {convertTemperature, Direction};