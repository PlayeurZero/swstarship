import React, { Component } from 'react'
import { Layout } from 'antd'

import StarWars from '../StarWars/StarWars.js'

import './App.css'

const { Header, Footer, Content } = Layout

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ marginTop: 50, padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <StarWars />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          MATHIEU Nicolas © 2017 &mdash; Design par Ant Design
        </Footer>
      </Layout>
    )
  }
}

export default App
