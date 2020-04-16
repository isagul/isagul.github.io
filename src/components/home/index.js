import React from 'react';
import App from '../../App';
import Profile from '../profile/index';
import SocialIcons from '../social/index';
import './style.scss';

const Home = () => {
    return (
        <App>
            <div className="home-component">
                <Profile />
                <SocialIcons />
            </div>
        </App>
    )
}

export default Home;