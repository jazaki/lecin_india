import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu, Carousel, Row, Col } from 'antd';
const { Header, Content, Footer} = Layout;

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
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <h1 style={{textAlign: "center"}}>
                            About Us
                        </h1>
                        <p style={{textAlign: "center"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat egestas mauris, ut tincidunt nunc. Sed vel viverra orci. Nulla tincidunt lectus id volutpat euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ac efficitur sapien. Sed luctus porttitor libero, quis convallis lorem hendrerit eget.
                        </p>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <h1 style={{textAlign: "center"}}>
                            Our Programs
                        </h1>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{padding: "20px"}}>
                    {/*try CSS Grid instead*/}
                    <Col span={6} style={{height: "15em", border: "1px solid black"}}></Col>
                    <Col span={6} style={{height: "15em", border: "1px solid black"}}></Col>
                    <Col span={6} style={{height: "15em", border: "1px solid black"}}></Col>
                    <Col span={6} style={{height: "15em", border: "1px solid black"}}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <h1 style={{textAlign: "center"}}>
                            Our Initiatives
                        </h1>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    {/*try CSS Grid instead*/}
                    <Col span={4}></Col>
                    <Col span={16} style={{padding: "20px"}}>
                        <Row>
                            <Col span={24} style={{height: "10em", border: "1px solid black"}}></Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{height: "10em", border: "1px solid black"}}></Col>
                        </Row>
                        <Row>
                            <Col span={24} style={{height: "10em", border: "1px solid black"}}></Col>
                        </Row>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <h1 style={{textAlign: "center"}}>
                            News Section
                        </h1>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{padding:"20px"}}>
                    {/*try CSS Grid instead*/}
                    <Col span={2}></Col>
                    <Col span={20} style={{height: "20em", border: "1px solid black"}}>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </Content>
            <Footer style={{background: "#cecece", height: "30em", padding: 0}}>
                <Row style={{padding:"20px", borderBottom: "1px solid black", height: "10em"}}>
                    <Col span={12} style={{textAlign: "center"}}>
                        <h2>Address</h2>
                    </Col>
                    <Col span={12} style={{textAlign: "center"}}>
                        <h2>Social Links</h2>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <h1 style={{textAlign: "center"}}>
                            FAQ Form
                        </h1>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{padding:"20px", borderBottom: "1px solid black", height: "10em"}}>
                    <Col span={12} style={{textAlign: "center"}}>
                        <h4>Email Input</h4>
                    </Col>
                    <Col span={12} style={{textAlign: "center"}}>
                        <h4>Query Input</h4>
                    </Col>
                </Row>
                <Row style={{background: "#000", height: "20%", display: "flex"}}>
                    <Col span={24}
                         style={{color: "#fff", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        &copy;&nbsp;LECIN India 2018 All Rights Reserved
                    </Col>
                </Row>
            </Footer>
        </Layout>
    );
  }
}

export default App;
