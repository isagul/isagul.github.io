import React, { Component } from 'react';
import Profile from './components/profile';
import SocialIcons from './components/social-icons';
import TwitterTimeline from './components/twitter-timeline';
import Skills from './components/skills';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Profile/>
        <div className="index-content">
          <Skills/>
          <TwitterTimeline/>
        </div>
        <div className="footerContent">
          <SocialIcons/>
        </div>
        
      </div>
    );
  }
}

export default App;

