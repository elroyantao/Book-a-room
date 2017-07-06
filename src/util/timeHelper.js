export const timeList = {
  0: '9.00 AM',
  1: '9.30 AM',
  2: '10.00 AM',
  3: '10.30 AM',
  4: '11.00 AM',
  5: '11.30 AM',
  6: '12.00 PM',
  7: '12.30 PM',
  8: '1.00 PM',
  9: '1.30 PM',
  10: '2.00 PM',
  11: '2.30 PM',
  12: '3.00 PM',
  13: '3.30 PM',
  14: '4.00 PM',
  15: '4.30 PM'
}

export function convertTimeSlotsToTime(timeslots) {
  const helperTimeList = { ...timeList, 16: '5.00 PM'}
  if (!timeslots || !timeslots.length) return 'no time selected'
  return `${helperTimeList[timeslots[0]]} - ${helperTimeList[timeslots[timeslots.length - 1] + 1]}`
}
