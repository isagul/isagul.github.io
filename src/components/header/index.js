import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const Header = (props) => {
    let history = useHistory();
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        let currentTheme = localStorage.getItem('theme');
        if (currentTheme === null) {
            localStorage.setItem('theme', 'light');
        } else {
            setTheme(currentTheme);
        }
    }, [theme])

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
                            <img src={require('../../assets/images/sun.svg')} width="50" height="50" alt="Sun free icon" title="Moon free icon" />
                            :
                            <img src={require('../../assets/images/night.svg')} width="50" height="50" alt="Moon free icon" title="Sun free icon" />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;