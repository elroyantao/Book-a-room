import React, { Component } from 'react'
import { Text, Container, List, ListItem, H2, Left, Body } from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'

class SelectRoom extends Component {
  constructor() {
    super()
    console.log(this.props.meetings)
  }

  render() {
    return (
      <Container>
        <H2>Select Day</H2>
        
      </Container>
    )
  }
}

export default createContainer(({ date }) => ({
  meetings: Meteor.subscribe('dayMeetings', date)
}), SelectRoom)
