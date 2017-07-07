import React, { Component } from 'react'
import { Text, Button, Body, Form, Card, CardItem } from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'

class Settings extends Component {
  onPress = () => {
    Meteor.logout(this.props.onLogout)
  }

  render() {
    const { user } = this.props
    console.log(user)
    return (
      <Form>
        <Card>
          <CardItem header>
            <Text>User</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{user.profile.first_name}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Email</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{user.emails[0].address}</Text>
            </Body>
          </CardItem>
        </Card>
        <Button block primary style={style.button} onPress={this.onPress}>
          <Text> Log out </Text>
        </Button>
      </Form>
    )
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user()
  }
}, Settings)


const style = {
  button: {
    marginTop: 30
  }
}
