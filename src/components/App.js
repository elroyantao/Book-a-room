import React, { Component } from 'react'
import {
  Container,
  Header,
  Body,
  Title,
  Content
} from 'native-base'
import Home from '../screens/Home'
import BookARoom from '../screens/BookARoom'
import Agenda from '../screens/Agenda'
import Settings from '../screens/Settings'
import NavMenu from './NavMenu'

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
        <Content>
          { this.routeTo(this.state.activeScreen) }
        </Content>
        <NavMenu
          activeTab={this.state.activeScreen}
          menuTabs={this.tabs}
          onPress={this.onPressHandler}
        />
      </Container>
    )
  }
}
