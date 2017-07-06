import React, { Component } from 'react'
import { Container, Picker, Text, H2, Button } from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
//
const Item = Picker.Item
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
      startTime: 1,
      duration: 1
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

  render() {
    console.log(this.props.meetings)
    return (
      <Container>
        <H2>Select Room</H2>
        <Text>Select your meeting time</Text>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.startTime}
          onValueChange={this.onStartTimeChange.bind(this)}
        >
          {timeList.map((time, index) => (
              <Item label={time} value={index} key={index} />
            ))}
        </Picker>
        <Text>Select your meeting time</Text>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.duration}
          onValueChange={this.onDurationChange.bind(this)}
        >
          {duration.map((dur, index) => (
              <Item label={dur} value={index} key={index} />
            ))}
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
