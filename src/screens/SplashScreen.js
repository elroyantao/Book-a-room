import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Spinner } from 'native-base'

const splashscreen = require('../../assets/splashscreen.png')

export default class SplashPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image source={splashscreen} resizeMode='cover' style={styles.backdrop} />
        </View>
        <View style={styles.spinner}>
          <Spinner />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    height: null,
    width: null
  }
})
