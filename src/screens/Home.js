import React, { Component } from 'react'
import { Container, Thumbnail, Text } from 'native-base'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Thumbnail source={require('../../assets/user_circle.png')} />
        <Text>Hi Jack!</Text>
      </Container>
    )
  }
}
