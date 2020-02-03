import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const Header = (props) => {
    let history = useHistory();
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const lightIcon = "https://image.flaticon.com/icons/svg/1164/1164954.svg";
    const nightIcon = "https://image.flaticon.com/icons/svg/2033/2033921.svg";

    const toggleTheme = () => {
        props.toggleTheme();
        setTheme(localStorage.getItem('theme'));
    };

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
                <div className="theme-icon" onClick={toggleTheme}>
                   {
                       theme === 'light' ?
                       <img src={nightIcon} width="50" height="50" alt="Sun free icon" title="Moon free icon" />
                       :
                       <img src={lightIcon} width="50" height="50" alt="Moon free icon" title="Sun free icon" />
                   }
                </div>
            </div>
        </div>
    )
}

export default Header;