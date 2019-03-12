import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './ContentArea.css';

import Dashboard from './Dashboard';
import Visions from './Visions';
import Decisions from './Decisions';
import Community from './Community';
import Chat from './Chat';
import Calendar from './Calendar';
import Boards from './Visions/Boards';
import Milestones from './Visions/Milestones';

const ContentArea = (props) => (
  <Switch>
    <Route path="/dashboard" render={ (prevProps) => <Dashboard {...prevProps} checkRoute={props.checkRoute} /> } />

    <Route exact path="/visions" render={ (prevProps) => <Visions {...prevProps} checkRoute={props.checkRoute} /> } />    
    <Route path="/visions/:vision/:milestone" render={ (prevProps) => <Boards {...prevProps} checkRoute={props.checkRoute} /> } />
    <Route path="/visions/:vision" render={ (prevProps) => <Milestones {...prevProps} checkRoute={props.checkRoute} /> } />

    <Route path="/decisions" render={ (prevProps) => <Decisions {...prevProps} checkRoute={props.checkRoute} /> } />

    <Route path="/community" render={ (prevProps) => <Community {...prevProps} checkRoute={props.checkRoute} /> } />

    <Route path="/chat" render={ (prevProps) => <Chat {...prevProps} checkRoute={props.checkRoute} /> } />

    <Route path="/calendar" render={ (prevProps) => <Calendar {...prevProps} checkRoute={props.checkRoute} /> } />
  </Switch>
);

export default ContentArea;
