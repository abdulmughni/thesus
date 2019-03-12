import React, { Component } from 'react';
import { Layout } from 'antd';

import Sidebar from './Sidebar';
import DetailContent from './Content';
  
const { Content } = Layout;

class Community extends Component {
  componentDidMount() {
    const { checkRoute } = this.props;

    checkRoute('Community')
  }
  
  render() {

      return(
        <Layout className="community-page">
            <Sidebar />
            <DetailContent />
        </Layout>
      )
  }
}

export default Community;
