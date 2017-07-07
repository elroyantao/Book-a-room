/* eslint-disable react/jsx-no-comment-textnodes,max-len,no-underscore-dangle */
import React, { Component } from 'react'
import Meteor, { createContainer } from 'react-native-meteor'
import { Container, Content, Spinner } from 'native-base'
import MeetingList from '../components/MeetingList'


class Agenda extends Component {
  render() {
    return (
      <Container>
        <Content>
          { !this.props.meetingsReady && <Spinner /> }
          { this.props.meetingsReady && this.props.meetings.map((value) => <MeetingList key={value._id} meeting={value} />)}
        </Content>
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
