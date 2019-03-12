import React, { Component } from 'react';
import { Layout } from 'antd';
  
const { Content } = Layout;

class Calendar extends Component {
  componentDidMount() {
    const { checkRoute } = this.props;

    checkRoute('Calendar')
  }
  
  render() {

      return(
        <Content className="crm-content-layout">
            Calendar Page
        </Content>
      )
  }
}

export default Calendar;
