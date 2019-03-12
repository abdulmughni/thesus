import React, { Component } from 'react';
import { Row, Col, Button, Card, Avatar } from 'antd';
import FontAwesome from 'react-fontawesome';

import DevImage from '../../../../Statics/images/peoples/community-user.png';

const { Meta } = Card;
  
class Header extends Component {  
  render() {

      return(
        <Row type="flex" justify="center" align="middle" className="community-head">
            <Col span={16}>
                <div className="two-flex-box">
                    <Button type="primary" className="blue-button-style mr-15">Import</Button>
                    <span>Deploy Azure Express Route</span>
                </div>

                <div className="social-links">
                    <FontAwesome name='facebook' />
                    <FontAwesome name='twitter' />
                    <FontAwesome name='instagram' />
                    <FontAwesome name='envelope' />
                </div>
            </Col>
            <Col span={8}>
                <Meta
                    className="card-detail-meta two-flex-box"
                    avatar={<Avatar src={DevImage} />}
                    title="David James"
                    description="Project Manager"
                />                
            </Col>
        </Row>
      )
  }
}

export default Header;
