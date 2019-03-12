import React, { Component } from 'react';
import { Layout, Icon, Input, Modal } from 'antd';
import Slider from "react-slick";

import Header from './Header';
import MilestoneForm from './Forms/MilestoneForm';

import './Milestone.css';
import initData from '../../../../Statics/data/milestone/initData';

const { Content } = Layout;
  
class Milestones extends Component {
  state = {
    visible: false
  }

  showModel = (e) => {
    e.stopPropagation();
    this.setState({
      visible: true
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false
    });
  }

  gotoBoard = () => {
    const { history } = this.props;

    history.push('vision/milestone/board');
  }
  
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true
    };

    const { visible } = this.state;
    return(
      <div>
          <Header />
          <Content className="p-20">              
            <div className="search">
              <Input size="large" placeholder="Search Milestones" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.5)' }} />} />
            </div>              

            <div className="milestone-row-style">
              <Slider {...settings}>
                {
                  initData && initData.map((data, i) => {
                    return (
                      <div className="box-col" key={i}>
                          <span className="mile-title">Milestone</span>
                          <div className="ds-color-boxes milestone-box" onClick={this.gotoBoard}>
                            <div className="cb-head">
                              <span className="th-box-title">{data.title}</span>
                              <span className="th-box-setting"><Icon type="setting" theme="filled" onClick={this.showModel} /></span>
                            </div>                            
                          </div>
                          {
                            data.boards.length > 0 &&
                            <div className="tree board-flow-style">
                              <ul>
                                <li className="b-first-li">
                                  <Icon type="arrow-down" />
                                  <ul className="board-inner-drop">
                                    <div className={data.boards.length > 4 ? 'scroll-boards' : ''}>
                                      {
                                        data.boards.map((data, i) => {
                                          return (
                                            <li key={i}>
                                              <span className="board-title">Board</span>
                                              <div className="ds-color-boxes">
                                                <div className="cb-head">
                                                  <span className="th-box-title">{data.title}</span>
                                                </div>                            
                                              </div>

                                              <ul className="board-inner-drop">
                                                <li>
                                                  <div className="obj-round-count">
                                                    <span>{data.objective}</span>
                                                    <h4>Objectives</h4>
                                                  </div>
                                                </li>
                                              </ul>
                                            </li>                                              
                                          )
                                        })
                                      }
                                    </div>  
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          }                            

                      </div>
                    )                    
                  })
                }
              </Slider>             
          </div>
          </Content>
          <Modal
            width={1000}
            visible={visible}
            onCancel={this.handleCancel}
            footer={false}
            >
              <MilestoneForm handleCancel={this.handleCancel} />
          </Modal>
      </div>
    )
  }
}

export default Milestones;
