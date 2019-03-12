import React, { Component } from 'react';
import { Layout, Tabs } from 'antd';

import Header from './Header';
import Overview from './Overview';
import Details from './Details';
  
const { Content } = Layout;
const TabPane = Tabs.TabPane;

class Community extends Component {
    callback = (key) => {
        console.log(key);
    }

    render() {

        return(
            <Content className="community-content p-0">
                <Header />

                <Tabs defaultActiveKey="1" onChange={this.callback} className="tabs-style p-20">
                    <TabPane tab="Overview" key="1">
                        <Overview />
                    </TabPane>
                    
                    <TabPane tab="Details" key="2">
                        <Details />
                    </TabPane>
                </Tabs>
            </Content>
        )
    }
}

export default Community;
