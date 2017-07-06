import React, { Component } from 'react'
import {
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'

export default class App extends Component {

  render() {
    const { menuTabs, activeTab, onPress } = this.props
    return (
      <Footer>
        <FooterTab>
          {
            menuTabs.map((tab) => (
              <Button
                active={tab.name === activeTab}
                key={tab.name}
                onPress={() => onPress(tab)}
              >
                <Icon
                  active={tab.name === activeTab}
                  name={tab.icon}
                />
              </ Button>
            ))
          }
        </FooterTab>
      </Footer>
    )
  }
}
