import React, { Component } from 'react'
import { Image } from 'react-native'
import { Content, Card, CardItem, Text, Left, Body, Right } from 'native-base'

export default class MeetingCard extends Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
              <Text>Stand Up</Text>
              <Text note>Floor 7 - Room 1</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../../assets/room1.jpg')} style={{ height: 100, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Text>MBH</Text>
            </Left>
            <Right>
              <Text>11:00 AM</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}