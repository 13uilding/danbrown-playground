const {convertTemperature, Direction} = require('../../../build/enums/temperature');

test('Convert 27C to 80.60F', () => {
   expect(convertTemperature(27, Direction.CtoF));
})

test('Convert -10F to -23.3C', () => {
   expect(convertTemperature(-10, Direction.FtoC));
})

test('Convert -10C to -23.333C', () => {
   expect(convertTemperature(-10, Direction.FtoC));
})