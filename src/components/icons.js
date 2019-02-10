import React from 'react';

export default class SocialIcons extends React.Component{
    render(){
        return(
            <div className="content" id="icons-div">
                <div className="icons">
                    <a rel="noopener noreferrer" target="_blank" className="not-active" href="https://www.linkedin.com/in/isa-gul/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@isagul" className="not-active">
                        <i className="fab fa-medium"></i>            
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/isagul" className="not-active">
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/isamigul" className="not-active">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>
        )
    }
}