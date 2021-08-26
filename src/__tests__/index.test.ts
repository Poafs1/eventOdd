import eventodd from '../index';

// Test event odd function
describe('Test eventOdd function', () => {
  // Input event number should return is event number
  test('Should be event number', () => {
    expect(eventodd.eventOdd(2)).toBe('Is event number.');
  });
  // Input odd number should return is odd number
  test('Should be event number', () => {
    expect(eventodd.eventOdd(2)).toBe('Is event number.');
  });
});

// Test isOdd and isEvent
describe('Test isOdd and isEvent functions', () => {
  // Should return true if event // else false
  test('Should return true if event number', () => {
    expect(eventodd.isEvent(2)).toBe(true);
  });
  test('Should return true if event number', () => {
    expect(eventodd.isEvent(3)).toBe(false);
  });

  // Should return true if odd // else false
  test('Should return true if odd number', () => {
    expect(eventodd.isOdd(3)).toBe(true);
  });
  test('Should return true if odd number', () => {
    expect(eventodd.isOdd(4)).toBe(false);
  });
});
