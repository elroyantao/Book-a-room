import React, { Component } from 'react'
import { Text, View, Button } from 'native-base'
import Meteor from 'react-native-meteor'

export default class Settings extends Component {
  render() {
    return (
      <View>
        <Text>Settings Page!</Text>
        <Button onPress={() => Meteor.logout()}>
          <Text>Logout</Text>
        </Button>
      </View>
    )
  }
}
