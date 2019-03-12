import React, { Component } from 'react';
import { Row, Col, Avatar, Icon, Modal } from 'antd';

import MilestoneForm from './Forms/MilestoneForm';

import P1 from '../../../../Statics/images/peoples/p1.png';
import P2 from '../../../../Statics/images/peoples/p2.png';
import P3 from '../../../../Statics/images/peoples/p3.png';
import P4 from '../../../../Statics/images/peoples/p4.png';
  
class Header extends Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
        visible: true
    });
  }

  handleCancel = (e) => {
    this.setState({
        visible: false
    });
  }

  render() {
    const { visible } = this.state;

    return(
      <Row type="flex" align="middle" gutter={16} className="vision-inner-head">
        <Col span={16}>
          <div className="list-peoples">
            <Icon type="user-add" className="add-user" />
            <Avatar src={P1} />
            <Avatar src={P2} />
            <Avatar src={P3} />
            <Avatar src={P4} />
            <Icon type="ellipsis" className="dotted-last" />
          </div>
        </Col>

        <Col span={8}>
          <div className="head-action-buttons">
            <Icon type="setting" theme="filled" className="setting" onClick={this.showModal} />
          </div>            
        </Col>

        <Modal
          width={1000}
          visible={visible}
          onCancel={this.handleCancel}
          footer={false}
          >
          <MilestoneForm handleCancel={this.handleCancel} />
        </Modal>
      </Row>
    )
  }
}

export default Header;
