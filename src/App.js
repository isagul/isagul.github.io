import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Countdown from 'react-countdown-now';

import './App.scss';

class App extends Component {
  render() {
    console.log(Date.now());
    return (
      <div className="App">
        <div className="comingSoon">
          <h1>coming soon... <FontAwesomeIcon icon="smile-wink" /></h1>
          <hr/>
          <Countdown date={'23 Feb 2019 23:59:59'}/>
        </div>
      </div>
    );
  }
}

export default App;

