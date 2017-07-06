import React, { Component } from 'react'
import { Text, Container, List, ListItem, H2, Left, Body } from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import SelectDate from './SelectDate'
import SelectRoom from './SelectRoom'


export default class BookARoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'MBH',
      room: null,
      date: null,
      start: null,
      duration: null
    }


  }

  handleSelectDate = (date) => {
    this.setState({
      date
    })
  }

  render() {
    const { location, room, date, time, duration } = this.state
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
    if (!room) {
      return (
        <SelectRoom date={date} />
      )
    }
  }
}
