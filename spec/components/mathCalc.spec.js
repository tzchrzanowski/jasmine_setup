
describe('sum, adds numbers', function(){
  const sum = require('../../src/components/mathCalc').sum;
  it('equals 6', function () {
    expect(sum(2, 4)).toEqual(6);
  });
});