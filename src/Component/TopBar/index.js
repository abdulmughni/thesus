import React, { Component } from 'react';
import { Layout, Icon, Badge, Dropdown, Menu, Card, Avatar, Breadcrumb } from 'antd';

import './TopBar.css';

import Logo from '../../Statics/images/logo.png';
import ProfilePic from '../../Statics/images/profile.png';

const { Header } = Layout;
const { Item } = Menu;
const { Meta } = Card;

class TopBar extends Component {
    render() {
      const { routeName } = this.props;

      const messageMenu = (
        <Menu>
          <Item>
            1st menu item
          </Item>
          <Item>
            2nd menu item
          </Item>
          <Item>
            3rd menu item
          </Item>
        </Menu>
      )

      const notifyMenu = (
        <Menu>
          <Item>
            1st menu item
          </Item>
          <Item>
            2nd menu item
          </Item>
          <Item>
            3rd menu item
          </Item>
        </Menu>
      )

      const profileDropdown = (
        <Menu>
          <Item>
            Profile
          </Item>
          <Item>
            Settings
          </Item>
          <Item>
            Logout
          </Item>
        </Menu>
      )

      return(
        <Header className="crm-header">
            <div className="logo row-middle">
              <img src={Logo} alt="Thesus" />
            </div>
             
            {/* <Icon type="bars" className="collapse-bar" onClick={toggle} /> */}

            <Breadcrumb className="row-middle">
              <Breadcrumb.Item>{routeName}</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="topbar-profile row-middle">
              <Dropdown overlay={messageMenu}>
                <Badge status="warning" dot>
                  <Icon type="wechat" theme="filled" />
                </Badge>
              </Dropdown>

              <Dropdown overlay={notifyMenu}>
                <Badge status="warning" dot>
                  <Icon type="bell" theme="filled" />
                </Badge>
              </Dropdown>

              <div className="profile-user row-middle">
                <Dropdown overlay={profileDropdown} trigger={['click']}>
                  <Meta
                    avatar={<Avatar src={ProfilePic} />} 
                    title="John Doe"                 
                  />
                </Dropdown>                
              </div>              
            </div>
        </Header>
      )
    }
}

export default TopBar;
