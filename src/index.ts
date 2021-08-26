const eventOdd = (num: number) => {
  if (isEvent(num)) {
    return 'Is event number.';
  } else {
    return 'Is odd number.';
  }
};

const isEvent = (num: number) => num % 2 === 0;

const isOdd = (num: number) => num % 2 !== 0;

export default {
  eventOdd,
  isEvent,
  isOdd,
};
