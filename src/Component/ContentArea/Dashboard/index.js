import React, { Component } from 'react';
import { Layout } from 'antd';
  
const { Content } = Layout;

class Dashboard extends Component {
  componentDidMount() {
    const { checkRoute } = this.props;

    checkRoute('Dashboard')
  }

  render() {
      return(
        <Content className="crm-content-layout">
            Dashboard Page
        </Content>
      )
  }
}

export default Dashboard;
