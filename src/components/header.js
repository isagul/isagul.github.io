import React from 'react';
import {useHistory} from 'react-router-dom';
import './header.scss';

const Header = () => {
    let history = useHistory();
    return (
        <div className="header-component">
            <div className="header-list">
                <div className="header-left-side">
                    <li className="header-item" onClick={() => history.push('/')}>isagul</li>
                </div>
                <div className="header-right-side">
                    <li className="header-item" onClick={() => history.push('/about')}>about</li>
                    <a href="https://medium.com/@isagul" rel="noopener noreferrer" target="_blank"><li className="header-item">blog</li></a>
                    <li className="header-item" onClick={() => history.push('/projects')}>projects</li>
                </div>                
            </div>
        </div>
    )
}

export default Header;