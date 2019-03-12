import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card, Avatar, Rate } from 'antd';

import Developers from '../../../Statics/data/community/sidebarData';
import DevImage from '../../../Statics/images/peoples/community-user.png';

const { Sider } = Layout;
const { Meta } = Card;

class Sidebar extends Component {
    state = {
        selectedIndex: null
    }

    selectedDeveloper = (value) => {
        this.setState({ selectedIndex: value });
    }

    render() {
        const { selectedIndex } = this.state;

        return(
            <Sider 
                width={400}
                className="community-sidebar"
            >
                <Menu>
                    {
                        Developers.map((data, i) => {
                            return(
                                <Menu.Item key={i} onClick={() => this.selectedDeveloper(i)}>
                                    <Row type="flex" justify="center">
                                        <Col span={18}>
                                            <Meta
                                                className="list-meta"
                                                title={data.title}
                                                description={data.description}
                                            />
                                            <Row type="flex" justify="center" className="mt-20">
                                                <Col span={8}>
                                                    <div className="devep-perform">
                                                        Milestones: <span>{data.milestone}</span>
                                                    </div>
                                                </Col>
                                                <Col span={8}>
                                                    <div className="devep-perform">
                                                        Boards: <span>{data.boards}</span>
                                                    </div>
                                                </Col>
                                                <Col span={8}>
                                                    <div className="devep-perform">
                                                        Objectives: <span>{data.objectives}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={6} className="text-right">
                                            {
                                                selectedIndex === i ?
                                                <Avatar className="c-box-avatar" src={DevImage} /> : 
                                                <Rate className='star-rating' disabled defaultValue={4} />
                                            }

                                            <div className="show-days blue-gradient">
                                                <span>{data.days}</span>
                                                <span>days</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Menu.Item>
                            )
                        })
                    }         
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar;
