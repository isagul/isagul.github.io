import React from 'react';
import App from '../../App';
import './style.scss';

const About = () => {
    return (
        <App>
            <div className="about-me">
                <div>
                    <h4>
                        <span className="curly-braces">{"{ "}</span>{"Hi I'm "}
                        <span className="my-name">Isa</span>
                        <span className="curly-braces">{" }"}</span>
                    </h4>
                    <p>I live in Istanbul. I am a Front End developer building websites and web applications.
                        I interested in JavaScript and have professional experience working with React and Angular.
                </p>
                    <p>Also, I have used these technologies: Redux, RxJS, Sass/Less, Gulp, Webpack, ES6, NodeJS, MongoDB</p>
                    {/* <a href="https://twitter.com/isamigul?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @isamigul</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>             */}
                </div>
            </div>
        </App>
    )
}

export default About;