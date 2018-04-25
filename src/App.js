import React, { Component } from 'react';
import $ from 'jquery'
import 'fullpage.js/dist/jquery.fullpage'
import 'fullpage.js/dist/jquery.fullpage.css'

import './App.css';
import 'antd/dist/antd.css';
import cont_banner from './imgs/about.jpg'
import { Layout, Menu, Carousel, Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        $('#fullpage').fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors:['', 'about', 'programs', 'initiatives', 'news', 'contact_us'],
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: ['firstSlide', 'secondSlide'],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
            sectionsColor : ['#ccc', '#fff', "#000"],
            paddingTop: '0' ,
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            lazyLoading: true,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
    }

  render() {
    return (
        <Layout>
            <Header className="nav-bar">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content>
                <div id="fullpage">
                    <div className="section">
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                    <div className="section about">
                        <Row>
                            <Col xs={24} sm={24} lg={12} md={12} offset={3}>
                                <img src={cont_banner}
                                     style={{height: "20em", boxShadow: "2px 10px 33px 9px #00000052"}}/>
                            </Col>
                            <Col xs={24} pull={2} sm={24} lg={8} md={8}>
                                <Row>
                                    <Col>
                                        <span style={{fontSize: "48px"}}>
                                            About Us
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <span style={{fontSize: "15px"}}>
                                            Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur.
                                        </span>
                                    </Col>
                                </Row>

                                <Row style={{marginTop: "4em"}}>
                                    <Col xs={24} sm={24} lg={12} md={12}>
                                        <Row>
                                            <Col>
                                               <span style={{fontSize: "20px"}}>
                                                    Mission
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur.
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={24} sm={24} lg={12} md={12}>
                                        <Row>
                                            <Col>
                                               <span style={{fontSize: "20px"}}>
                                                    Vision
                                                </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                Lorem Ipsum Dolor Sit Amet Consectur. Lorem Ipsum Dolor Sit Amet Consectur.
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className="section"></div>
                    <div className="section"></div>
                </div>
            </Content>
        </Layout>
    );
  }
}

export default App;
