import React, { Component } from 'react'
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
import { convertTimeSlotsToTime } from '../util/timeHelper'

const room1 = require('../../assets/room1.jpg')
const room2 = require('../../assets/room2.jpg')
const room3 = require('../../assets/room3.jpg')

export default class MeetingList extends Component {
  render() {
    console.log(this.props.meeting)
    const { meeting } = this.props
    console.log(meeting.date)
    return (
          <List>
            <ListItem avatar>
              <Left>
                { meeting.room === 1 && <Thumbnail source={room1} square /> }
                { meeting.room === 2 && <Thumbnail source={room2} square /> }
                { meeting.room === 3 && <Thumbnail source={room3} square /> }
              </Left>
              <Body>
              <Text>Room {meeting.room} - Floor {meeting.floor} ({meeting.location})</Text>
              <Text note>{meeting.description}</Text>
              <Text>{convertTimeSlotsToTime(meeting.timeslots)} </Text>
              </Body>
              <Right>
                <Text note>{new Date(meeting.date).getDate()}</Text>
              </Right>
            </ListItem>
          </List>
    )
  }
}
