import { eventOdd, isEvent, isOdd } from '../index'

// Test event odd function
describe('Test eventOdd function', () => {
  // Input event number should return is event number
  test('Should be event number', () => {
    expect(eventOdd(2)).toBe('EVENT!');
  });
  // Input odd number should return is odd number
  test('Should be event number', () => {
    expect(eventOdd(3)).toBe('ODD!');
  });
});

// Test isOdd and isEvent
describe('Test isOdd and isEvent functions', () => {
  // Should return true if event // else false
  test('Should return true if event number', () => {
    expect(isEvent(2)).toBe(true);
  });
  test('Should return true if event number', () => {
    expect(isEvent(3)).toBe(false);
  });

  // Should return true if odd // else false
  test('Should return true if odd number', () => {
    expect(isOdd(3)).toBe(true);
  });
  test('Should return true if odd number', () => {
    expect(isOdd(4)).toBe(false);
  });
});
