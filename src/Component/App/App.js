import React, { Component } from 'react';
import { Layout } from 'antd';

import ContentArea from '../ContentArea';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';

class App extends Component {
  state = {
    collapsed: false,
    routeName: ''
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  checkRoute = (value) => {
    this.setState({
      routeName: value
    });
  }

  render() {
    const { collapsed, routeName } = this.state;

    return (
      <div>
        <Layout className="crm-layout">
            <TopBar toggle={this.toggle} routeName={routeName} />

            <Layout>
                <Sidebar collapsed={collapsed} /> 

                <Layout>
                  <ContentArea checkRoute={this.checkRoute} />
                </Layout>
            </Layout>
          </Layout>        
      </div>
    );
  }
}

export default App;
