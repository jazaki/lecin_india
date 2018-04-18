import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu, Carousel} from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
            <Header style={{height: "10em"}}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '5em', float: "right", marginTop: "2.5em" }}>
                    <Menu.Item key="1">About Us</Menu.Item>
                    <Menu.Item key="2">Our Programs</Menu.Item>
                    <Menu.Item key="3">Initiatives</Menu.Item>
                    <Menu.Item key="4">Events</Menu.Item>
                    <Menu.Item key="5">Feature</Menu.Item>
                    <Menu.Item key="6">Contact Us</Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </Content>
        </Layout>
    );
  }
}

export default App;
