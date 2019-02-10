import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Countdown from 'react-countdown-now';
import Profile from './components/profile';
import Skills from './components/skills';
import Icons from './components/icons';
import TwitterTimeline from './components/twitter-timeline';


import './App.scss';
import './styles/media.query.scss';

class App extends Component {
  render() {
    return (
      <div className="container index">
          <Profile/>
          <div className="index-content">
            <Skills/>  
            <TwitterTimeline/>
          </div>          
          <Icons/>
      </div>
    );
  }
}

export default App;

