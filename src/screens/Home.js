import React, { Component } from 'react'
import { View } from 'native-base'
import { Image, Text } from 'react-native'
import Meteor, { createContainer } from 'react-native-meteor'

class Home extends Component {
  render() {
    return (
      <View style={style.hero}>
        <Image source={require('../../assets/user_circle.png')} style={style.thumbnail} />
        <Text style={style.welcome} >{`Hi ${this.props.user.profile.first_name}`}</Text>
      </View>
    )
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user()
  }
}, Home)

const style = {
  hero: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  thumbnail: {
    width: 140,
    height: 140,
    marginRight: 20
  },
  welcome: {
    display: 'flex',
    fontSize: 40
  }
}
