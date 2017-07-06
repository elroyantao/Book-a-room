import React, { Component } from 'react'
import { Text, Container, List, ListItem, H2, Left, Body } from 'native-base'

const allRooms = [1, 2, 3]

export default class SelectRoom extends Component {
  constructor(props) {
    super(props)
  }

  handleRoomSelect = (room) => {
    this.props.onSelectRoom(room)
  }

  render() {
    return (
      <Container>
        <H2>Select Room</H2>
        <List>
          {allRooms.map((room) => {
            return (
              <ListItem
                onPress={() => this.handleRoomSelect(room)}
                key={room}
              >
                  <Text>Room: {room}</Text>
              </ListItem>
            )
          })}
        </List>
      </Container>
    )
  }
}
