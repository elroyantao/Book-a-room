import React, { Component } from 'react'
import Meteor, { createContainer } from 'react-native-meteor'
import { Container, H2, Spinner } from 'native-base'
import MeetingList from '../components/MeetingList'


class Agenda extends Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <H2>My Meetings</H2>
        { !this.props.meetingsReady && <Spinner /> }
        { this.props.meetingsReady && this.props.meetings.map((value) => <MeetingList key={ value._id } meeting={value} />)}
      </Container>
    )
  }
}

export default createContainer(() => {
  const handler = Meteor.subscribe('meetings')
  return {
    meetingsReady: handler.ready(),
    meetings: Meteor.collection('meetings').find({
      creator: Meteor.userId()
    })
  }
}, Agenda)
