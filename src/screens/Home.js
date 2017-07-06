import React, { Component } from 'react'
import { View } from 'native-base'
import { Image, Text } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={style.hero}>
        <Image source={require('../../assets/user_circle.png')} style={style.thumbnail} />
        <Text style={style.welcome} >Hi Callum</Text>
      </View>
    )
  }
}

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
    marginRight: 10
  },
  welcome: {
    display: 'flex',
    fontSize: 40
  }
}
