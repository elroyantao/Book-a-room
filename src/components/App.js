import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Content
} from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import Home from '../screens/Home'
import BookARoom from '../screens/BookARoom'
import Agenda from '../screens/Agenda'
import Settings from '../screens/Settings'
import Login from '../screens/Login'
import NavMenu from './NavMenu'

try {
  Meteor.connect('ws://127.0.0.1:3000/websocket')
  console.log('SUCCESS')
} catch (e) {
  console.log('ERROR', e)
}

class App extends Component {

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
      case 'login':
        break
      case 'home':
        return <Home />
      case 'book':
        return <BookARoom />
      case 'agenda':
        return <Agenda />
      case 'settings':
        return <Settings />
      default: break
    }
  }

  render() {
    return this.props.userId ?
      <Container>
        <Header>
          <Body>
            <Title>Book-A-Room</Title>
          </Body>
        </Header>
        <Content>
          { this.routeTo(this.state.activeScreen) }
        </Content>
        <NavMenu
          activeTab={this.state.activeScreen}
          menuTabs={this.tabs}
          onPress={this.onPressHandler}
        />
      </Container>
    : <Login/>
  }
}

export default createContainer(() => {
  return {
    userId: Meteor.userId()
  }
}, App)