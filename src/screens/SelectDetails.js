import React, { Component } from 'react'
import { Container, Picker, Form, Item } from 'native-base'

const timeList = [
  '9.00 AM',
  '9.30 AM',
  '10.00 AM',
  '10.30 AM',
  '11.00 AM',
  '11.30 AM',
  '12.00 PM',
  '12.30 PM',
  '1.00 PM',
  '1.30 PM',
  '2.00 PM',
  '2.30 PM',
  '3.00 PM',
  '3.30 PM',
  '4.00 PM',
  '4.30 PM',
]

export default class BookARoom extends Component {
  constructor() {
    super()
    this.state = {
      selectedTime: timeList[0]
    }
  }

  onValueChange = (value: string) => {
   this.setState({
     selectedTime: value
   })
 }

  render() {
    return (
      <Container>
        <Form>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selectedTime}
            onValueChange={this.onValueChange}
          >
            {timeList.map((time, index) => <Item label={time} value={index} />)}
          </Picker>
        </Form>
      </Container>
    )
  }
}
