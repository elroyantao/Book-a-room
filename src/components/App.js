import React, { Component } from 'react'
import {
  Container,
  Header,
  Body,
  Title,
  Content
} from 'native-base'
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
      activeScene: 'home'
    }
  }

  onPressHandler = (tab) => {
    this.setState({
      activeScene: tab.name
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Book-A-Room</Title>
          </Body>
        </Header>
        <Content />
        <NavMenu
          activeTab={this.state.activeScene}
          menuTabs={this.tabs}
          onPress={this.onPressHandler}
        />
      </Container>
    )
  }
}
