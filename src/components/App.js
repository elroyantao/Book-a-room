import React, { Component } from 'react'
import {
  Container,
  Header,
  Body,
  Title
} from 'native-base'
import Meteor from 'react-native-meteor'
import Home from '../screens/Home'
import BookARoom from '../screens/BookARoom'
import Agenda from '../screens/Agenda'
import Settings from '../screens/Settings'
import NavMenu from './NavMenu'

try {
  Meteor.connect('ws://127.0.0.1:3000/websocket')
} catch (e) {
  // TODO
}
export default class App extends Component {

  constructor() {
    super()
    this.tabs = [
      { name: 'home', icon: 'home' },
      { name: 'book', icon: 'add' },
      { name: 'agenda', icon: 'calendar' },
      { name: 'settings', icon: 'person' }
    ]
    this.state = {
      activeScreen: 'home'
    }
  }

  onPressHandler = (tab) => {
    this.setState({
      activeScreen: tab.name
    })
  }

  routeTo = (activeScreen) => {
    switch (activeScreen) {
      case 'home':
      return <Home />
      break
      case 'book':
      return <BookARoom />
      break
      case 'agenda':
      return <Agenda />
      break
      case 'settings':
      return <Settings />
      break
      default: break
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Book-A-Room</Title>
          </Body>
        </Header>
        { this.routeTo(this.state.activeScreen) }
        <NavMenu
          activeTab={this.state.activeScreen}
          menuTabs={this.tabs}
          onPress={this.onPressHandler}
        />
      </Container>
    )
  }
}
