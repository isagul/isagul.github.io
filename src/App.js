import React from 'react';
import Profile from './components/profile';
import './App.scss';
import './styles/media.query.css';
import SocialIcons from './components/social-icons';
import Header from './components/header';

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

