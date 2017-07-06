import React, { Component } from 'react'
import { Text, Container, List, ListItem, H2, Left, Body } from 'native-base'

const curr = new Date()
const first = curr.getDate()

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default class BookARoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      myDays: this.sevenDays()
    }
  }

  formatDate = (date) => {
    const d = new Date(date)
    const day = d.getDay()
    const dayName = daysOfWeek[d.getDay()]
    return { day: d.getDate(), dayName, isworkdays: day !== 0 && day !== 6 }
  }

  // firstday = () => (new Date(curr.setDate(first))).toString()
  sevenDays = () => {
    const tmpArr = []
    for (let i = 0; i < 7; i++) {
      tmpArr.push(this.formatDate(new Date(curr.getTime()).setDate(first + i)))
    }
    return tmpArr
  }

  render() {
    console.log(this.state.myDays)
    return (
      <Container>
        <H2>Select Day</H2>
        <List>
          {
            this.state.myDays.map((value) => {
              if (value.isworkdays) {
                return (
                  <ListItem key={`${value.day}`} icon>
                    <Left>
                      <Text>{`${value.day}`}</Text>
                    </Left>
                    <Body>
                    <Text>{`${value.dayName}`}</Text>
                    </Body>
                  </ListItem>
                )
              }
            })
          }
        </List>
      </Container>
    )
  }
}
