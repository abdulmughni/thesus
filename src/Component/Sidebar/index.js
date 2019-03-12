import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import DashbordIcon from '../../Statics/images/dashboard-icon.png';
import VisionIcon from '../../Statics/images/visions-icon.png';
import DecisionIcon from '../../Statics/images/decisions-icon.png';
import CommunityIcon from '../../Statics/images/templates-icon.png';
import ChatIcon from '../../Statics/images/chat-icon.png';
import CalendarIcon from '../../Statics/images/calendar.png';

import "./Sidebar.css";

const { Sider } = Layout;
const { Item } = Menu;

class Sidebar extends Component {
    render() {
        const { collapsed } = this.props;
        return(            
            <Sider 
                width={300}
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="crm-sidebar"
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Item key="1">
                        <Link to="/dashboard">
                            <img src={DashbordIcon} alt="Dashboard" />
                            <span>Dashboad</span>
                        </Link>
                    </Item>
                    <Item key="2">
                        <Link to="/visions">
                            <img src={VisionIcon} alt="Visions" />
                            <span>Visions</span>
                        </Link>    
                    </Item>
                    <Item key="3">
                        <Link to="/decisions">
                            <img src={DecisionIcon} alt="Decisions" />
                            <span>Decisions</span>
                        </Link>
                    </Item>
                    <Item key="4">
                        <Link to="/community">
                            <img src={CommunityIcon} alt="Community" />
                            <span>Community</span>
                        </Link>
                    </Item>
                    <Item key="5">
                        <Link to="/chat">
                            <img src={ChatIcon} alt="Chat" />
                            <span>Chat</span>
                        </Link>
                    </Item>
                    <Item key="6">
                        <Link to="/calendar">
                            <img src={CalendarIcon} alt="Calendar" />
                            <span>Calendar</span>
                        </Link>
                    </Item>
                </Menu>
            </Sider>                
        )
    }
}

export default Sidebar;
