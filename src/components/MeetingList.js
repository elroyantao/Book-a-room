import React, { Component } from 'react'
import { List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
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
      <List style={style.list}>
        <ListItem avatar>
          <Left>
            { meeting.room === 1 && <Thumbnail source={room1} square /> }
            { meeting.room === 2 && <Thumbnail source={room2} square /> }
            { meeting.room === 3 && <Thumbnail source={room3} square /> }
          </Left>
          <Body>
          <Text note>Room {meeting.room} - Floor {meeting.floor}</Text>
          <Text>{meeting.description}</Text>
          <Text note>{convertTimeSlotsToTime(meeting.timeslots)} </Text>
          </Body>
          <Right>
            <Text note>({meeting.location})</Text>
          </Right>
        </ListItem>
      </List>
    )
  }
}

const style = {
  list: {
    marginTop: 15
  }
}
