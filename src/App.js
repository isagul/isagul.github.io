import React from 'react';
import Profile from './components/profile/index';
import SocialIcons from './components/social/index';
import Header from './components/header/index';
import './App.scss';
import './styles/media.query.css';


const App = () => {
    return (
      <div className="app">
        <Header />
        <div className="content">
            <Profile/>
            <SocialIcons/>
        </div>
      </div>     
    );
}

export default App;

