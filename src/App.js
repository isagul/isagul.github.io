import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Countdown from 'react-countdown-now';
import Profile from './components/profile';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Profile/>
        <div className="content">
          <div className="icons">
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-medium"></i>
            <i class="fab fa-github-square"></i>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;

