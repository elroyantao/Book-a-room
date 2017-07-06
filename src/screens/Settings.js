import React, { Component } from 'react'
import { Text, View, Button } from 'native-base'
import Meteor from 'react-native-meteor'

export default class Settings extends Component {
  onPress = () => {
    Meteor.logout(this.props.onLogout)
  }

  render() {
    return (
      <View>
        <Text>Settings Page!</Text>
        <Button onPress={this.onPress}>
          <Text>Logout</Text>
        </Button>
      </View>
    )
  }
}
