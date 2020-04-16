import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ABOUT, BLOG, HOME, PROJECT } from '../../constants/routes';
import './style.scss';

const Header = (props) => {
    let history = useHistory();
    let location = useLocation();
    const {pathname} = location;
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
        <div id="header" className="header-component">
            <div className="header-list">
                <div className="header-left-side">
                    <li className={`header-item ${pathname === HOME ? 'active' : ''}`} onClick={() => history.push(HOME)}>isagul</li>
                </div>
                <div className="header-right-side">
                    <li className={`header-item ${pathname === ABOUT ? 'active' : ''}`} onClick={() => history.push(ABOUT)}>about</li>
                    <li className={`header-item ${pathname === BLOG ? 'active' : ''}`} onClick={() => history.push(BLOG)}>blog</li>                
                    <li className={`header-item ${pathname === PROJECT ? 'active' : ''}`} onClick={() => history.push(PROJECT)}>projects</li>
                </div>
                <div className="theme-icon" onClick={toggleTheme}>
                    {
                        theme === 'light' ?
                            <img src={require('../../assets/images/sun.svg')} width="40" height="40" alt="Sun free icon" title="Sun" />
                            :
                            <img src={require('../../assets/images/night.svg')} width="40" height="40" alt="Moon free icon" title="Moon" />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;