const eventOdd = (num: number) => {
  if (isEvent(num)) {
    console.log('Is event number.')
  } else {
    console.log('Is odd number.')
  }
}

const isEvent = (num: number) => num % 2 == 0

const isOdd = (num: number) => num % 2 != 0

export default {
  eventOdd: eventOdd,
  isEvent: isEvent,
  isOdd: isOdd
}
