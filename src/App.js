import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu, Carousel, Row, Col } from 'antd';
import {SectionsContainer, Section} from 'react-fullpage';

const { Header, Footer, Sider, Content } = Layout;

let options = {
    sectionClassName:     'section',
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix', 'sectionSeven'],
    scrollBar:            false,
    navigation:           false,
    verticalAlign:        false,
    sectionPaddingTop:    '0',
    sectionPaddingBottom: '0',
    arrowNavigation:      true
};

class App extends Component {
    constructor() {
        super();
    }

  render() {
    return (
        <Layout>
            <Header style={{height: "fit-content", zIndex: 1000, position: "fixed", width: "100%", padding: "2em", background: "transparent"}}>
                <Menu theme="dark"
                      mode="horizontal"
                      style={{ lineHeight: '5em', float: "right", background: "transparent", border: "none"}}>
                    <Menu.Item key="2">
                        <a href="#sectionTwo">Section Two</a>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <a href="#sectionThree">Section Three</a>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <a href="#sectionFour">Section Four</a>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <a href="#sectionFive">Section Five</a>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <a href="#sectionSix">Section Six</a>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <a href="#sectionSeven">Section Seven</a>
                    </Menu.Item>
                </Menu>
            </Header>
            <SectionsContainer {...options}>
                <Section>
                    {/*<div style={{background: "#2ce6cc", height: "100%"}}></div>*/}
                    <Carousel autoplay mobileFirst="true">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Section>
                <Section>
                    <div style={{background: "#b1cac6", height: "100%"}}></div>
                </Section>
                <Section>
                    <div style={{background: "#e66f6a", height: "100%"}}></div>
                </Section>
                <Section>
                    <div style={{background: "#17ade6", height: "100%"}}></div>
                </Section>
                <Section>
                    <div style={{background: "#dee633", height: "100%"}}></div>
                </Section>
                <Section>
                    <div style={{background: "#a666e6", height: "100%"}}></div>
                </Section>
                <Section>
                    <div style={{background: "#e6235d", height: "100%"}}></div>
                </Section>
            </SectionsContainer>
        </Layout>
    );
  }
}

export default App;
