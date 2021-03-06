import React, { Component } from 'react'
import {
  Content,
  Container,
  Header,
  Body,
  Title
} from 'native-base'
import { ScrollView } from 'react-native'
import Meteor, { createContainer } from 'react-native-meteor'
import Home from '../screens/Home'
import BookARoom from '../screens/BookARoom'
import Agenda from '../screens/Agenda'
import Settings from '../screens/Settings'
import Login from '../screens/Login'
import SplashScreen from '../screens/SplashScreen'
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
      { name: 'agenda', icon: 'calendar', title: 'Agenda' },
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
    console.log(this.refs)
    this.refs.content.scrollTo({ x: 0, y: 0, animated: false })
  }

  onLogoutHandler = () => {
    this.setState({
      activeScreen: 'login',
      activeTitle: 'Login'
    })
  }

  routeToScreen = (activeScreen, activeTitle) => {
    this.setState({
      activeScreen,
      activeTitle
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
    console.log('Connected', this.props.connected)
    if (!this.props.connected || this.props.loggingIn) {
      return <SplashScreen />
    }
    return this.props.userId ?
      <Container>
        <Header>
          <Body>
            <Title>{this.state.activeTitle.toUpperCase()}</Title>
          </Body>
        </Header>
        <ScrollView ref="content">
          <Content style={style.wrapper}>
            { this.routeTo(this.state.activeScreen) }
          </Content>
        </ ScrollView>
        <NavMenu
          activeTab={this.state.activeScreen}
          menuTabs={this.tabs}
          onPress={this.onPressHandler}
        />
      </Container>
    : <Login onFinished={this.routeToScreen} />
  }
}

export default createContainer(() => ({
  connected: Meteor.status().connected,
  loggingIn: Meteor.loggingIn(),
  userId: Meteor.userId()
}), App)

const style = {
  wrapper: {
    marginLeft: 5,
    marginRight: 5
  }
}
