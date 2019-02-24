const currentTime = new Date().getTime()
const nextWeek = new Date().setTime(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))
const twoWeeks = new Date().setTime(new Date().getTime() + (14 * 24 * 60 * 60 * 1000))
const future = new Date().setTime(new Date().getTime() + (15 * 24 * 60 * 60 * 1000)) // 2 weeks+

const ordinalSuffix = (number) => {
  let j = number % 10, k = number % 100;

  if (j == 1 && k != 11) {
    return `${number}st`
  }

  if (j == 2 && k != 12) {
    return `${number}nd`
  }

  if (j == 3 && k != 13) {
    return `${number}rd`
  }

  return number + "th"
}

export default {
  currentTime,
  nextWeek,
  twoWeeks,
  future,
  ordinalSuffix
}
