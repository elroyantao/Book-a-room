import React, { Component } from 'react'
import { Content, Container, Picker, Text, H3, Button, Input, Item as FormItem, Card, CardItem } from 'native-base'
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
      duration: null,
      description: ''
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
    this.props.selectTimeslot(timeslotsSelected, this.state.description)
  }

  handleChangeDescription = (description) => {
    this.setState({ description })
  }

  findAvailableSlots = () => {
    const { location, floor, room } = this.props
    const alreadyBookedTimesSlots = this.props.meetings.reduce((times, meetings) => {
      return location === meetings.location &&
        floor === meetings.floor &&
        room === meetings.room ?
        times.concat(meetings.timeslots) :
        []
    }, [])
    return Object.keys(timeList).filter((timeIds) => {
      return !alreadyBookedTimesSlots.includes(parseInt(timeIds, 10))
    }).map((timeIds) => ({
      value: parseInt(timeIds, 10),
      label: timeList[timeIds]
    }))
  }

  findAvailableDurations = (availableTime) => {
    if (this.state.startTime === null || !availableTime || !availableTime.length) return null
    const timeslots = availableTime.map((time) => time.value)
    const availableDurations = []
    for (let i = 0; i < duration.length; i++) {
      if (timeslots.includes(this.state.startTime + i) && this.state.startTime + i <= 15) {
        availableDurations.push(i)
      } else break
    }
    return availableDurations.map((index) => duration[index])
  }

  render() {
    const availableTime = this.findAvailableSlots()
    const availableDurations = this.findAvailableDurations(availableTime)

    if (!availableTime.length) {
      return (
        <Content>
          <Text> Sorry this meeting room is fully booked, Please select another room </Text>
          <Button onPress={this.props.goBack}>
            <Text>Choose another room</Text>
          </Button>
        </Content>
      )
    }
    return (
      <Content>
        <H3 style={style.head}>Enter meeting details</H3>
          <Text>Meeting Start</Text>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            placeholder="please select the start time"
            selectedValue={this.state.startTime}
            onValueChange={this.onStartTimeChange.bind(this)}
            style={style.spacer}
          >
            {availableTime.map((time, index) => {
              return (
                <Item label={time.label} value={time.value} key={index} />
              )
            })}
          </Picker>
          <Text>Meeting duration</Text>
          <Picker
            disabled
            iosHeader="Select one"
            placeholder="please select the meeting duration"
            mode="dropdown"
            selectedValue={this.state.duration}
            onValueChange={this.onDurationChange.bind(this)}
            style={style.spacer}
          >
            {availableDurations && availableDurations.map((dur, index) => {
              return (
                <Item label={dur} value={index} key={index} />
              )
            })}
          </Picker>
          <Text>Meeting topic</Text>
          <FormItem style={style.spacer}>
            <Input
              placeholder="please enter topic here..."
              onChangeText={this.handleChangeDescription}
              value={this.state.description}
            />
          </FormItem>
          <Button block primary onPress={this.onSubmit}>
            <Text> Book room </Text>
          </Button>
      </Content>
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
  head: {
    marginTop: 10,
    marginBottom: 20
  },
  spacer: {
    marginBottom: 20
  }
}
