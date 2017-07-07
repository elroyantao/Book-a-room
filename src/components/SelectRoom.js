import React, { Component } from 'react'
import { Text, Container, List, ListItem, H3, Left, Body } from 'native-base'

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
      <Container style={style.body}>
        <H3 style={style.head}>Select Room</H3>
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

const style = {
  body: {
    marginLeft: 10,
    marginRight: 10
  },
  head: {
    marginTop: 10,
    marginBottom: 20
  }
}
