import React, { Component } from 'react';
import { Input, Row, Col, DatePicker, Select, Icon, Button, message, Avatar, Card } from 'antd';

import P1 from '../../../../../Statics/images/peoples/p1.png';
import P2 from '../../../../../Statics/images/peoples/p2.png';
import P3 from '../../../../../Statics/images/peoples/p3.png';
import P4 from '../../../../../Statics/images/peoples/p4.png';

const { Option } = Select;
const { TextArea } = Input;
const { Meta } = Card;

const members = [
  { id: "1", name: "john Smith", img_url: P1 },
  { id: "2", name: "john Smith", img_url: P2 },
  { id: "3", name: "john Smith", img_url: P3 },
  { id: "4", name: "john Smith", img_url: P4 },
];

const owners = [
  { id: "1", name: "john Smith", img_url: P1 },
  { id: "2", name: "john Smith", img_url: P2 },
  { id: "3", name: "john Smith", img_url: P3 },
  { id: "4", name: "john Smith", img_url: P4 },
];
  
class MileStoneForm extends Component { 
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
    titleValue: '',
    status: '',
    description: '',
    membersUsers: members,
    ownersUsers: owners,
    addedMembers: [],
    addedOwners: [],
    search: ''
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onDateChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartDateChange = (value) => {
    this.onDateChange('startValue', value);
  }

  onEndDateChange = (value) => {
    this.onDateChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  onChangeTitle = (value) => {
    this.setState({ titleValue: value });
  }

  handleStatus = (value) => {
    this.setState({ status: value });
  }

  handleDescription = (value) => {
    this.setState({ description: value });
  }

  handleSubmit = () => {
    const { startValue, endValue, titleValue, description } = this.state;
    const { handleCancel } = this.props;

    if(startValue && endValue && titleValue && description) {
      message.success('Successfully Update')
      handleCancel()
    } else {
      message.error('Please fill all the fields')
    }
  }

  selectPeoples = (user, obj) => {
    const { addedMembers, membersUsers, ownersUsers, addedOwners} = this.state;

    if(user === 'member') {
      const member = [...membersUsers]; // make a separate copy of the array
      const index = member.indexOf(obj)
      member.splice(index, 1);
      this.setState({membersUsers: member});

      this.setState({ addedMembers: [...addedMembers, obj] }, () => {
        message.success(`${ obj.name } is successfully added`)
      })
    }
    
    if(user === 'owner') {
      const owner = [...ownersUsers]; // make a separate copy of the array
      const index = owner.indexOf(obj)
      owner.splice(index, 1);
      this.setState({ownersUsers: owner});

      this.setState({ addedOwners: [...addedOwners, obj] }, () => {
        message.success(`${ obj.name } is successfully added`)
      })
    } 

  }

  onSearchPeoples = (e) => {
    this.setState({ search: e.target.value })
  }
  
  render() {
    const { startValue, endValue, endOpen, titleValue, description, membersUsers, addedMembers, ownersUsers, addedOwners, search } = this.state;
    const { handleCancel } = this.props;

    return(
      <Row type="flex" gutter={16} className="th-form-style">
        <Col className="row-col" span={24}>
          <div className="th-title">
            <Icon type="star" theme="filled" />
            <h3 className="pop-title">MileStone</h3>
          </div>          
        </Col>
        
        <Col className="row-col" span={6}>
          <Input placeholder="Title" defaultValue={titleValue} onChange={this.onChangeTitle} />
        </Col>

        <Col className="row-col" span={6}>
          <DatePicker
            disabledDate={this.disabledStartDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={startValue}
            placeholder="Start Date"
            onChange={this.onStartDateChange}
            onOpenChange={this.handleStartOpenChange}
          />
        </Col>

        <Col className="row-col" span={6}>
          <DatePicker
            disabledDate={this.disabledEndDate}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            value={endValue}
            placeholder="End Date"
            onChange={this.onEndDateChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
          />
        </Col>

        <Col className="row-col" span={6}>
          <Select placeholder="Status" onChange={this.handleStatus}>
            <Option value="complete"><div className="status-circle"><span className="complete"></span> Complete</div></Option>
            <Option value="in-progress"><div className="status-circle"><span className="progress"></span> In Progress</div></Option>
            <Option value="pending-revision"><div className="status-circle"><span className="pending"></span> Pending Revision</div></Option>
            <Option value="not-started"><div className="status-circle"><span className="not-started"></span> Not Started</div></Option>
          </Select>
        </Col>

        <Col className="row-col" span={14}>
          <TextArea rows={8} placeholder="Description" defaultValue={description} onChange={this.handleDescription} />
        </Col>

        <Col className="row-col" span={10}>
          <Row type="flex" gutter={16} className="th-add-persons">
            <Col span={24}>
              <div className="add-person">
                <span>Co-Owners</span>

                <div className="dropdown-people">                    
                  <Icon type="user-add" className="dropbtn-people" />
                  <div className="dropdown-content-people">
                    <div className="search">
                      <Input size="large" value={search} placeholder="Search Visions" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.5)' }} />} onChange={this.onSearchPeoples} />
                    </div>
                    <div className="members-list">
                      {
                        ownersUsers.map(people => {
                          return(
                            <div key={people.id} onClick={() => this.selectPeoples('owner', people)}>
                              <Meta
                                avatar={<Avatar src={people.img_url} />}
                                title={people.name}
                              />
                            </div>                            
                          )
                        })
                      }                      
                    </div>                    
                  </div>
                </div>
              </div>
            </Col>
            
            <Col span={24} className="mt-20">
              {
                addedOwners.map(people => {
                  return(
                    <div key={people.id} className="flt mr-10">
                      <Avatar src={people.img_url} />
                    </div>
                  )
                })
              }
            </Col>
          </Row>

          <Row type="flex" gutter={16} className="th-add-persons">
            <Col span={24}>
              <div className="add-person">
                <span>Members</span> 

                <div className="dropdown-people">                    
                  <Icon type="user-add" className="dropbtn-people" />
                  <div className="dropdown-content-people">
                    <div className="search">
                      <Input size="large" value={search} placeholder="Search Visions" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.5)' }} />} onChange={this.onSearchPeoples} />
                    </div>
                    <div className="members-list">
                      {
                        membersUsers.map(people => {
                          return(
                            <div key={people.id} onClick={() => this.selectPeoples('member', people)}>
                              <Meta
                                avatar={<Avatar src={people.img_url} />}
                                title={people.name}
                              />
                            </div>                            
                          )
                        })
                      }                      
                    </div>                    
                  </div>
                </div>
              </div>
            </Col>
            
            <Col span={24} className="mt-20">
              {
                addedMembers.map(people => {
                  return(
                    <div key={people.id} className="flt mr-10">
                      <Avatar src={people.img_url} />
                    </div>
                  )
                })
              }
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Button type="primary" className="mr-20" onClick={this.handleSubmit}>Done</Button>
          <Button type="primary" onClick={handleCancel}>Cancel</Button>
        </Col>
      </Row>
    )
  }
}

export default MileStoneForm;
