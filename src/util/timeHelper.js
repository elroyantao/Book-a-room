const timeList = [
  '9.00 AM',
  '9.30 AM',
  '10.00 AM',
  '10.30 AM',
  '11.00 AM',
  '11.30 AM',
  '12.00 PM',
  '12.30 PM',
  '1.00 PM',
  '1.30 PM',
  '2.00 PM',
  '2.30 PM',
  '3.00 PM',
  '3.30 PM',
  '4.00 PM',
  '4.30 PM'
]

export function convertTimeSlotsToTime(timeslots) {
  if (!timeslots || !timeslots.length) return 'no time selected'
  return `${timeList[timeslots[0]]} - ${timeList[timeslots[timeslots.length - 1] + 1]}`
}