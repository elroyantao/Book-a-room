import React, { Component } from 'react'
import { Text, Container, List, ListItem, H3, Left, Body } from 'native-base'

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
      <Container style={style.body}>
        <H3 style={style.head}>Select Floor</H3>
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
