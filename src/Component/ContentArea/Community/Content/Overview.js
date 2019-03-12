import React, { Component } from 'react';
import { Icon } from 'antd';
import Slider from "react-slick";

import initData from '../../../../Statics/data/milestone/initData';

class Overview extends Component {

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

        return(
            <div>
                <h3 className="heading-style">Description</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <h3 className="heading-style">Vision Map</h3>

                <div className="milestone-row-style">
                    <Slider {...settings}>
                        {
                        initData && initData.map((data, i) => {
                            return (
                            <div className="box-col" key={i}>
                                <div className="com-border-box">
                                    <span className="com-title">Milestone</span>
                                    <span className="com-desc">{data.title}</span>
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
                                                    <div className="com-border-box">
                                                        <span className="com-title">Boards</span>
                                                        <span className="com-desc">{data.title}</span>
                                                    </div>

                                                    <ul className="board-inner-drop">
                                                        <li>
                                                        <div className="obj-round-count">
                                                            <span className="blue-gradient com-objectives">{data.objective}</span>
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
                
            </div>
        )
    }
}

export default Overview;
