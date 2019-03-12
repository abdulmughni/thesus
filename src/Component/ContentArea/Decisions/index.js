import React, { Component } from 'react';
import { Layout } from 'antd';
  
const { Content } = Layout;

class Decisions extends Component {
  componentDidMount() {
    const { checkRoute } = this.props;

    checkRoute('Decisions')
  }
  
  render() {

      return(
        <Content className="crm-content-layout">
            Decisions Page
        </Content>
      )
  }
}

export default Decisions;
