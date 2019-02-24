import React, { Component } from 'react';
import Profile from './components/profile';

import './App.scss';
import './styles/media.query.css';
import SocialIcons from './components/social-icons';
import AboutMe from './components/about_me';
import ScrollButton from 'react-scroll-button';

class App extends Component {
  render() {
    return (
      <div>
        <div id="topDiv" className="app">
          <Profile/>
          <SocialIcons/>
        </div>
        <AboutMe/>
        <ScrollButton buttonBackgroundColor={'#CF5050'} targetId={'topDiv'} behavior={'smooth'}/>
      </div>     
    );
  }
}

export default App;

