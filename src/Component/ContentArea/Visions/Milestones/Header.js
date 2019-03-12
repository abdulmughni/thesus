import React, { Component } from 'react';
import { Row, Col, Avatar, Icon, Button, Modal } from 'antd';

import MilestoneForm from './Forms/MilestoneForm';
import Vision from '../AddVision';

import P1 from '../../../../Statics/images/peoples/p1.png';
import P2 from '../../../../Statics/images/peoples/p2.png';
import P3 from '../../../../Statics/images/peoples/p3.png';
import P4 from '../../../../Statics/images/peoples/p4.png';
  
class Header extends Component {
  state = {
    showModal: false,
    visionShow: false,
    milestoneShow: false
  }

  showModal = (type) => {
    this.setState({
      showModal: true,
      visionShow: type === 'vision' && true, 
      milestoneShow: type === 'milestone' && true
    });
  }

  handleCancel = (e) => {
    this.setState({
      showModal: false
    });
  }

  render() {
    const { showModal, visionShow, milestoneShow } = this.state;

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
            <Button type="primary" size="large" onClick={() => this.showModal('milestone')}>Add Milestone</Button>
            <Icon type="setting" theme="filled" className="setting" onClick={() => this.showModal('vision')} />
          </div>            
        </Col>

        <Modal
          width={1000}
          visible={showModal}
          onCancel={this.handleCancel}
          footer={false}
          >
          { visionShow && <Vision handleCancel={this.handleCancel} /> }
          { milestoneShow && <MilestoneForm handleCancel={this.handleCancel} /> }
        </Modal>
      </Row>
    )
  }
}

export default Header;
