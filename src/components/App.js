import React, { Component } from 'react'
import {
  Content,
  Container,
  Header,
  Body,
  Title
} from 'native-base'
import Meteor, { createContainer } from 'react-native-meteor'
import Home from '../screens/Home'
import BookARoom from '../screens/BookARoom'
import Agenda from '../screens/Agenda'
import Settings from '../screens/Settings'
import Login from '../screens/Login'
import NavMenu from './NavMenu'

try {
  Meteor.connect('ws://bookaroom.eu.meteorapp.com/websocket')
  console.log('SUCCESS')
} catch (e) {
  console.log('ERROR', e)
}

class App extends Component {

  constructor() {
    super()
    this.tabs = [
      { name: 'home', icon: 'home', title: 'Leave My Room!' },
      { name: 'book', icon: 'add', title: 'New Meeting' },
      { name: 'agenda', icon: 'calendar', title: 'My Meetings' },
      { name: 'settings', icon: 'person', title: 'Settings' }
    ]
    this.state = {
      activeScreen: 'home',
      activeTitle: 'Leave My Room!'
    }
  }

  onPressHandler = (tab) => {
    this.setState({
      activeScreen: tab.name,
      activeTitle: tab.title
    })
  }

  onLogoutHandler = () => {
    this.setState({
      activeScreen: 'login'
    })
  }

  routeToScreen = (activeScreen) => {
    this.setState({
      activeScreen
    })
  }

  routeTo = (activeScreen) => {
    switch (activeScreen) {
      case 'login':
        break
      case 'home':
        return <Home />
      case 'book':
        return <BookARoom onFinished={this.routeToScreen} />
      case 'agenda':
        return <Agenda />
      case 'settings':
        return <Settings onLogout={this.onLogoutHandler} />
      default: break
    }
  }

  render() {
    return this.props.userId ?
      <Container>
        <Header>
          <Body>
            <Title>{this.state.activeTitle.toUpperCase()}</Title>
          </Body>
        </Header>
        <Content style={style.wrapper}>
          { this.routeTo(this.state.activeScreen) }
        </Content>
        <NavMenu
          activeTab={this.state.activeScreen}
          menuTabs={this.tabs}
          onPress={this.onPressHandler}
        />
      </Container>
    : <Login />
  }
}

export default createContainer(() => {
  return {
    userId: Meteor.userId()
  }
}, App)

const style = {
  wrapper: {
    marginLeft: 20,
    marginRight: 20
  }
}
