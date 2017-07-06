/* eslint-disable global-require */
import React, { Component } from 'react'
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Spinner
} from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import { Image, Text } from 'react-native'
import MeetingCard from '../components/MeetingCard'

class Home extends Component {
  render() {
    const { user, meetingsReady, meetings } = this.props
    console.log(meetings)
    const message = meetings.length
      ? 'Today\'s meetings'
      : 'You have no meetings today!'

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Image source={require('../../assets/user_circle.png')} style={style.thumbnail} />
              </Left>
              <Body>
                <Text style={style.welcome} >{`Hi ${user.profile.first_name}!`}</Text>
              </Body>
            </CardItem>
          </Card>

          { !meetingsReady && <Spinner /> }
          {
            meetingsReady &&
            <Card>
              <CardItem>
                <Body>
                  <Text>{message}</Text>
                </Body>
              </CardItem>
            </Card>
          }
          {
            meetings.map((meeting, i) => <MeetingCard meeting={meeting} key={i} />)
          }
        </Content>
      </Container>
    )
  }
}

export default createContainer(() => {
  const subhandler = Meteor.subscribe('dayMeetings')

  return {
    user: Meteor.user(),
    meetingsReady: subhandler.ready(),
    meetings: Meteor.collection('meetings').find()
  }
}, Home)

const style = {
  thumbnail: {
    width: 70,
    height: 70,
    marginRight: 10
  },
  welcome: {
    display: 'flex',
    fontSize: 30
  }
}
