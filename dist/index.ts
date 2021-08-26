export const eventOdd = (num: number) => {
  if (isEvent(num)) {
    console.log('Is event number.')
  } else {
    console.log('Is odd number.')
  }
}

export const isEvent = (num: number) => num % 2 == 0

export const isOdd = (num: number) => num % 2 != 0
