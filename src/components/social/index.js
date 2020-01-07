import React from 'react';
import './style.scss';

const SocialIcons = () => {
    return (
        <div className="icons">
            <a href="https://github.com/isagul" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/isa-gul/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://medium.com/@isagul" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-medium"></i>
            </a>
            <a href="https://twitter.com/isamigul" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.npmjs.com/settings/isagul/profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-npm"></i>
            </a>
        </div>
    )
}

export default SocialIcons;
