
import {sum, subtract} from '../components/mathCalc';

test('sum adds numbers', ()=> {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
});

test('substract substracts number from the other', ()=> {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)  
});


function test(title, callback) {
  try {
    callback()
    console.log(`pass: ${title}`)
  } catch (error) {
    console.error(error)
    console.log(`fail: ${title}`)
  }
}

function expect(actual) {
  return{
    toBe(expected){
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}