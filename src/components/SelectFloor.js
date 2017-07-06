import React, { Component } from 'react'
import { Text, Container, List, ListItem, H2, Left, Body } from 'native-base'

const allFloors = [1, 2, 3, 4, 5, 6, 7]

export default class SelectFloor extends Component {
  constructor(props) {
    super(props)
  }

  handleFloorSelect = (floor) => {
    this.props.onSelectFloor(floor)
  }

  render() {
    return (
      <Container>
        <H2>Select Floor</H2>
        <List>
          {allFloors.map((floor) => {
            return (
              <ListItem
                onPress={() => this.handleFloorSelect(floor)}
                key={floor}
              >
                  <Text>Floor: {floor}</Text>
              </ListItem>
            )
          })}
        </List>
      </Container>
    )
  }
}
