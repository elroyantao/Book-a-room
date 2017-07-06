import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './src/components/App'

export default class BookARoom extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('BookARoom', () => BookARoom)
