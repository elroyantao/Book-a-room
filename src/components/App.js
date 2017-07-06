import React, { Component } from 'react'
import {
  Container,
  Header,
  Body,
  Title
} from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Book-A-Room</Title>
          </Body>
        </Header>
      </Container>
    )
  }
}
