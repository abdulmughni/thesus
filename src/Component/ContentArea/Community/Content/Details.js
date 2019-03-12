import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Details extends Component {   
    render() {

        return(
            <div>
                <div className="com-detail-box">
                    <FontAwesome name='usd' className="orange-bg" />
                    <span className="com-lable">Total Revenue</span>
                    <span className="com-value-show orange">$50,000</span>
                </div>

                <div className="com-detail-box">
                    <FontAwesome name='user' className="blue-bg" />
                    <span className="com-lable">Team Members</span>
                    <span className="com-value-show blue">01</span>
                </div>

                <div className="com-detail-box">
                    <FontAwesome name='refresh' className="green-bg" />
                    <span className="com-lable">Process Compatible</span>
                    <span className="com-value-show green">No</span>
                </div>

                <div className="com-detail-box">
                    <FontAwesome name='clock-o' className="light-blue-bg" />
                    <span className="com-lable">Duration</span>
                    <span className="com-value-show light-blue">$50,000</span>
                </div>

                <div className="com-detail-box">
                    <FontAwesome name='exclamation-triangle' className="light-orange-bg" />
                    <span className="com-lable">Warning</span>
                    <span className="com-value-show light-orange">12</span>
                </div>

                <div className="com-detail-box">
                    <FontAwesome name='bar-chart' className="light-green-bg" />
                    <span className="com-lable">Contribution Level</span>
                    <span className="com-value-show light-green">+2.0%</span>
                </div>
            </div>
        )
    }
}

export default Details;
