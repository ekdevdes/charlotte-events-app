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

const outputDateRange = (startDate, endDate, showDayofTheWeek = false) => {
  const startDateDayOfTheWeek = (showDayofTheWeek) ? `${startDate.toLocaleString('en-us', {
    weekday: 'short'
  })}, ` : ''

  if(endDate !== '') {
    const eventStartDay = startDate.getDate()
    const eventEndDay = endDate.getDate()
    const eventStartMonth = startDate.toLocaleString('en-US', { month: 'long' })
    const eventEndMonth = endDate.toLocaleString('en-US', { month: 'long' })

    if(eventStartDay === eventEndDay && eventStartMonth === eventEndMonth) {
      return `${startDateDayOfTheWeek} ${startDate.toLocaleString('en-US', { month: 'long' })}
        ${ordinalSuffix(startDate.getDate())}`
    } else if(eventStartDay !== eventEndDay && eventStartMonth === eventEndMonth) {
      return `${startDate.toLocaleString('en-US', { month: 'long' })}
          ${ordinalSuffix(startDate.getDate())} -
          ${ordinalSuffix(endDate.getDate())}`
    } else if(eventStartDay !== eventEndDay && eventStartMonth !== eventEndMonth) {
      return `${startDate.toLocaleString('en-US', { month: 'long' })}
        ${ordinalSuffix(startDate.getDate())} -
        ${endDate.toLocaleString('en-US', { month: 'long' })}
        ${ordinalSuffix(endDate.getDate())}`
    }
  } else {
    return `${startDateDayOfTheWeek} ${startDate.toLocaleString('en-US', { month: 'long' })}
      ${ordinalSuffix(startDate.getDate())}`
  }
}

export default {
  currentTime,
  nextWeek,
  twoWeeks,
  future,
  ordinalSuffix,
  outputDateRange
}
