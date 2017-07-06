import React, { Component } from 'react'
import { Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'

export default class MeetingList extends Component {
  render() {
    console.log(this.props.meeting)
    const { meeting } = this.props
    console.log(meeting.date)
    return (
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../assets/room1.jpg')} square />
              </Left>
              <Body>
              <Text>Room {meeting.room} - Floor {meeting.floor} ({meeting.location})</Text>
              <Text note>{meeting.description}</Text>
              </Body>
              <Right>
                <Text note>{new Date(meeting.date).getDate()}</Text>
              </Right>
            </ListItem>
          </List>
    )
  }
}
