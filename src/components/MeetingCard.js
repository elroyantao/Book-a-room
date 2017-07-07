import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Left, Body, Right } from 'native-base'
import { convertTimeSlotsToTime } from '../util/timeHelper'

const roomImgs = [
  require('../../assets/room1.jpg'),
  require('../../assets/room2.jpg'),
  require('../../assets/room3.jpg')
]

export default class MeetingCard extends Component {
  render() {
    const { description, floor, room, location, timeslots } = this.props.meeting
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{description}</Text>
              <Text note>{`Floor ${floor} - Room ${room}`}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={roomImgs[room - 1]}
            style={style.room}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text>{location}</Text>
          </Left>
          <Right>
            <Text note>{convertTimeSlotsToTime(timeslots)}</Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

const style = {
  room: {
    height: 80,
    width: null,
    flex: 1
  }
}
