/* eslint-disable global-require */
import React, { Component } from 'react'
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Right,
  Spinner
} from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import { Image, Text } from 'react-native'
import MeetingCard from '../components/MeetingCard'

class Home extends Component {
  render() {
    const { user, meetingsReady, meetings } = this.props
    console.log(meetings)
    const message = `You have ${meetings.length ? meetings.length : 'no'} meetings today`

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Image source={require('../../assets/user_circle.png')} style={style.thumbnail} />
              </Body>
              <Right>
                <Text style={style.welcome} >{`Hi ${user.profile.first_name}!`}</Text>
              </Right>
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
    width: 100,
    height: 100
  },
  welcome: {
    display: 'flex',
    fontSize: 40
  }
}
