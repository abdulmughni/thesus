import React, { Component } from 'react';
import { Layout } from 'antd';
  
const { Content } = Layout;

class Chat extends Component {
  componentDidMount() {
    const { checkRoute } = this.props;

    checkRoute('Chat')
  }
  
  render() {

      return(
        <Content className="crm-content-layout">
            Chat Page
        </Content>
      )
  }
}

export default Chat;
