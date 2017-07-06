import React, { Component } from 'react'
import { Text, Container, List, ListItem, H2, Left, Body, Toast } from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import SelectDate from '../components/SelectDate'
import SelectFloor from '../components/SelectFloor'
import SelectRoom from '../components/SelectRoom'
import SelectTime from '../components/SelectTime'

export default class BookARoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'MBH',
      floor: null,
      room: null,
      date: null,
      timeslots: [],
      description: 'hackathon showcase'
    }
  }

  handleSelectDate = (date) => {
    this.setState({
      date
    })
  }

  handleFloorSelect = (floor) => {
    this.setState({
      floor
    })
  }

  handleRoomSelect = (room) => {
    this.setState({
      room
    })
  }

  handleTimeSlot = (timeslots) => {
    this.setState({
      timeslots: [timeslots]
    }, this.bookMyRoom)
  }

  bookMyRoom = () => {
    const { location, date, timeslots, room, floor, description } = this.state
    console.log( location, date, timeslots, room, floor, description )
    Meteor.call('addMeeting', {
      location, date, timeslots, room, floor, description
    }, this.onCreateBooking)
  }

  onCreateBooking = (error, success) => {
    if (error) {
      return Toast.show({
        text: 'Sorry uncessfull',
        position: 'bottom',
        buttonText: 'Okay'
      })
    }
    this.props.onFinished('agenda')
  }

  render() {
    const { location, floor, room, date, timeslots } = this.state
    if (!location) {
      return (
        <Container>
          <text>please select a location</text>
        </Container>
      )
    }
    if (!date) {
      return (
        <SelectDate onSelectDate={this.handleSelectDate} />
      )
    }
    if (!floor) {
      return (
        <SelectFloor onSelectFloor={this.handleFloorSelect} />
      )
    }
    if (!room) {
      return (
        <SelectRoom onSelectRoom={this.handleRoomSelect} />
      )
    }
    if (!timeslots || !timeslots.length) {
      return (
        <SelectTime
          location={location}
          date={date}
          floor={floor}
          room={room}
          selectTimeslot={this.handleTimeSlot}
        />
      )
    }
    return <Text> done</Text>
  }
}
