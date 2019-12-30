import React from 'react';
import {useHistory} from 'react-router-dom';
import './header.scss';

const Header = () => {
    let history = useHistory();
    return (
        <div className="header-component">
            <div className="header-list">
                <div>
                    <li className="header-item" onClick={() => history.push('/')}>isagul</li>
                </div>
                <div>
                    <li className="header-item" onClick={() => history.push('/about-me')}>about</li>
                    <a href="https://medium.com/@isagul" target="_blank"><li className="header-item">blog</li></a>
                    <li className="header-item">projects</li>
                </div>                
            </div>
        </div>
    )
}

export default Header;