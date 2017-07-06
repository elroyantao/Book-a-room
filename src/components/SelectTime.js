import React, { Component } from 'react'
import { Container, Picker, Text, H2, Button } from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import { timeList } from '../util/timeHelper'

const Item = Picker.Item

const duration = [
  '30 mins',
  '1 hour',
  '1.5 hours',
  '2 hours',
  '2.5 hours'
]

class SelectTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: null,
      duration: null
    }
  }

  onStartTimeChange = (time) => {
    this.setState({
      startTime: time
    })
  }

  onDurationChange = (dur) => {
    this.setState({
      duration: dur
    })
  }

  onSubmit = () => {
    const timeslotsSelected = []
    for (let i = 0; i <= this.state.duration; i++) {
      timeslotsSelected.push(this.state.startTime + i)
    }
    this.props.selectTimeslot(timeslotsSelected)
  }

  findAvailableSlots = () => {
    const { location, date, floor, room } = this.props
    const alreadyBookedTimesSlots = this.props.meetings.reduce((times, meetings) => {
      return location === meetings.location &&
        floor === meetings.floor &&
        room === meetings.room ?
        times.concat(meetings.timeslots) :
        []
    }, [])
    console.log('booked', alreadyBookedTimesSlots);
    return Object.keys(timeList).filter((timeIds) => {
      return !alreadyBookedTimesSlots.includes(parseInt(timeIds, 10))
    }).map((timeIds) => ({
      value: parseInt(timeIds, 10),
      label: timeList[timeIds]
    }))
  }

  findAvailableDurations = (availableTime) => {
    if (!this.state.startTime || !availableTime || !availableTime.length) return null
    const timeslots = availableTime.map((time) => time.value)
    const availableDurations = []
    for (let i = 0; i < duration.length; i++) {
      if (timeslots.includes(this.state.startTime + i) && this.state.startTime + i <= 15) {
        availableDurations.push(i)
      } else break
    }
    return availableDurations.map((index) => duration[index] )
  }

  render() {
    const availableTime = this.findAvailableSlots()
    const availableDurations = this.findAvailableDurations(availableTime)

    if (!availableTime.length) return (
      <Container>
        <Text> Room fully booked </Text>
        <Button onPress={this.props.goBack}>
          <Text>Select anotherRoom</Text>
        </Button>
      </Container>
    )
    return (
      <Container>
        <H2>Select Room</H2>
        <Text>Select your meeting time</Text>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          placeholder="select your time"
          selectedValue={this.state.startTime}
          onValueChange={this.onStartTimeChange.bind(this)}
        >
          {availableTime.map((time, index) => {
            return (
              <Item label={time.label} value={time.value} key={index} />
            )
          })}
        </Picker>
        <Text>Select your meeting time</Text>
        <Picker
          disabled
          iosHeader="Select one"
          placeholder="select duration of your meeting"
          mode="dropdown"
          selectedValue={this.state.duration}
          onValueChange={this.onDurationChange.bind(this)}
        >
          {availableDurations && availableDurations.map((dur, index) => {
            return (
              <Item label={dur} value={index} key={index} />
            )
          })}
        </Picker>
        <Button block primary onPress={this.onSubmit}>
          <Text> Book room </Text>
        </Button>
      </Container>
    )
  }
}

export default createContainer(({ date }) => {
  const subhandler = Meteor.subscribe('dayMeetings', date)
  return {
    meetingsReady: subhandler.ready(),
    meetings: Meteor.collection('meetings').find()
  }
}, SelectTime)

const style = {

}
