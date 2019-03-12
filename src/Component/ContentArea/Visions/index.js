import React, { Component } from 'react';
import { Layout, Row, Col, Modal, Input, Button, Tabs, Icon, Progress } from 'antd';

import BarChart from './BarChart';

import AddVision from './AddVision';
  
const { Content } = Layout;
const TabPane = Tabs.TabPane;

const array = [
  { title: 'Develop Thesus', ml: 7, ob: 12, obj: 17 },
  { title: 'Buy condo in Miami', ml: 7, ob: 12, obj: 17 },
  { title: 'Condo In Miami', ml: 7, ob: 12, obj: 17 },
  { title: 'Travel to Asia', ml: 7, ob: 12, obj: 17 },
  { title: 'Condo In Miami', ml: 7, ob: 12, obj: 17 },
  { title: 'Condo In Miami', ml: 7, ob: 12, obj: 17 },
]

class Visions extends Component {
  state = { 
    visible: false, 
    boxView: false,
  };

  componentDidMount() {
    const { checkRoute } = this.props;

    checkRoute('Visions')
  }

  showModal = (e) => {
    e.stopPropagation();
    this.setState({
      visible: true,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  switchLayout = (key) => {
    key === '1' && this.setState({ boxView: false });
    key === '2' && this.setState({ boxView: true });
  };

  onClickEvent = () => {
    const { history } = this.props;

    history.push('visions/vision')
  }
  
  render() {
      const { visible, boxView } = this.state;

      return(
        <Content className="crm-content-layout">
            <div className="vision-head">
              <Tabs defaultActiveKey="1" size="large" onChange={this.switchLayout}>
                <TabPane tab="Grid" key="1"></TabPane>
                <TabPane tab="List" key="2"></TabPane>
              </Tabs>

              <div className="search">
                <Input size="large" placeholder="Search Visions" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.5)' }} />} />
              </div>
              
              <Button type="primary" icon="plus" size="large" onClick={this.showModal}> Vision</Button>
            </div>
            
            <Row type="flex" gutter={48} align="middle" className="dashboard-boxes">
              {
                array && array.map((data, i) => {
                  return (
                    
                    <Col span={boxView ? 24 : 8} className="box-col" key={i}>
                      <div className="ds-color-boxes" onClick={this.onClickEvent}>

                        <div className="cb-head">
                          <span className="th-box-title">{data.title}</span>
                          <span className="th-box-setting"><Icon type="setting" theme="filled" onClick={this.showModal} /></span>
                        </div>

                        <Row className="th-box-info">
                          <Col span={12} className="info-col">
                            <Row>
                              <Col span={18}>Milestones:</Col>
                              <Col span={6} className="text-right" className="text-right">{data.ml}</Col>
                            </Row>

                            <Row>
                              <Col span={18}>Objective Buckets:</Col>
                              <Col span={6} className="text-right">{data.ob}</Col>
                            </Row>

                            <Row>
                              <Col span={18}>Objectives:</Col>
                              <Col span={6} className="text-right">{data.obj}</Col>
                            </Row>
                          </Col>

                          <Col span={12} className="info-col">
                            <Row>
                              <Col span={18}>Milestones:</Col>
                              <Col span={6} className="text-right">{data.ml}</Col>
                            </Row>

                            <Row>
                              <Col span={18}>Objective Buckets:</Col>
                              <Col span={6} className="text-right">{data.ob}</Col>
                            </Row>

                            <Row>
                              <Col span={18}>Objectives:</Col>
                              <Col span={6} className="text-right">{data.obj}</Col>
                            </Row>                         
                          </Col>
                        </Row>

                        {
                          boxView && 
                          <div className="vision-chart">
                            <BarChart />
                          </div>
                        }                        
                        
                        <Progress percent={65} strokeWidth={12} />
                      </div>
                    </Col>
                  )                    
                })
              }                
            </Row>

            <Modal
              width={1000}
              visible={visible}
              onCancel={this.handleCancel}
              footer={false}
            >
              { visible && <AddVision handleCancel={this.handleCancel} /> }
            </Modal>
              
        </Content>
      )
  }
}

export default Visions;
