import React, { Component } from 'react'
import Meteor from 'react-native-meteor'
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Header,
  Body,
  Title,
  Text,
  Button
} from 'native-base'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: {
        value: '',
        error: false
      },
      password: {
        value: '',
        error: false
      }
    }
  }

  onChangeUsername = (value) => {
    this.setState({
      username: {
        value,
        error: false
      }
    })
  }

  onChangePassword = (value) => {
    this.setState({
      password: {
        value,
        error: false
      }
    })
  }

  onSubmit = () => {
    console.log('Logging in,', this.state)
    const isValid = this.validate(this.state.username.value, this.state.password.value)
    if (!isValid) return null
    console.log(isValid, 'Validity')
    Meteor.loginWithPassword(this.state.username.value, this.state.password.value, (err) => {
      if (err) {
        return console.log(err)
      }
      console.log('We\'re logged in!')
      // We're logged in
    })
  }

  validate = (username, password) => {
    if (username === '') {
      this.setState({
        username: {
          value: username,
          error: true
        }
      })
    }
    if (password === '') {
      this.setState({
        password: {
          value: password,
          error: true
        }
      })
    }
    return !(this.state.username.error || this.state.password.error)
  }

  render() {
    // const isError = this.state.username.error || this.state.password.error
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item floatingLabel error={this.state.username.error}>
              <Label>Username</Label>
              <Input
                onChangeText={this.onChangeUsername}
                value={this.state.username.value}
              />
            </Item>
            <Item floatingLabel last error={this.state.password.error}>
              <Label>Password</Label>
              <Input
                type="password"
                onChangeText={this.onChangePassword}
                value={this.state.password.value}
              />
            </Item>
            <Button block primary style={style.button} onPress={this.onSubmit}>
              <Text> Sign In </Text>
            </Button>

          </Form>
        </Content>
      </Container>
    )
  }
}

const style = {
  button: {
    marginTop: 30
  }
}
