import React, { Component } from 'react'
import { Text, Container, List, ListItem, H2, Left, Body } from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import SelectDate from './SelectDate'
import SelectFloor from './SelectFloor'
import SelectRoom from './SelectRoom'
import SelectTime from './SelectTime'

export default class BookARoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'MBH',
      floor: null,
      room: null,
      date: null,
      timeslot: []
    }
  }

  handleSelectDate = (date) => {
    console.log(date)
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

  handleTimeSlot = (timeslot) => {
    this.setState({
      timeslot
    })
  }

  render() {
    const { location, floor, room, date, timeslot } = this.state
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
    if (!timeslot || !timeslot.length) {
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
  }
}
