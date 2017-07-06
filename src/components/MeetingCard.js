import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Left, Body, Right } from 'native-base'
import { convertTimeSlotsToTime } from '../util/timeHelper'

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
            source={require('../../assets/room1.jpg')}
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
    height: 100,
    width: null,
    flex: 1
  }
}
