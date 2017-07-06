import React, { Component } from 'react'
import Meteor, { createContainer } from 'react-native-meteor'
import { Container, Text } from 'native-base'


class Agenda extends Component {
  render() {
    console.log(this.props)
    return (
    <Container>
      <Text>Some here</Text>
    </Container>
    )
  }
}

export default createContainer(() => {
  return {
    meetings: Meteor.collection('meetings').find({
      creator: Meteor.userId()
    })
  }
}, Agenda)
