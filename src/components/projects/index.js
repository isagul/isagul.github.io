import React from 'react';
import App from '../../App';
import './style.scss';

const Projects = () => {
    const myProjects = [
        { 
            name: 'nytimesbooks', 
            github_url: 'https://github.com/isagul/nytimesbooks', 
            live_url: 'https://app-nytimes.herokuapp.com/', 
            detail: 'A shopping cart project which lists books. It also allows you adding into basket and deleting item from basket by using hooks and context-api. Also, you can sign up and log in into this app anymore and you can add books to your cart permanently.',
            npm_link: null 
        },
        { 
            name: 'react-scroll-component', 
            github_url: 'https://github.com/isagul/react-scroll-button', 
            live_url: 'https://isagul.github.io/react-scroll-button/', 
            detail: 'Show a scroll button when you scrolled the page.', 
            npm_link: 'https://www.npmjs.com/package/react-scroll-button' 
        },
        { 
            name: 'periodic-table', 
            github_url: 'https://github.com/isagul/periodic-table', 
            live_url: 'https://app-periodic-table.netlify.com/', 
            detail: 'Periodic table with ReactJS.', 
            npm_link: null 
        },
        { 
            name: 'js-questions', 
            github_url: 'https://github.com/isagul/js-questions', 
            live_url: 'https://app-js-quiz.netlify.com/', 
            detail: 'A JavaScript quiz app about JavaScript questions.', 
            npm_link: null 
        },
        { 
            name: 'elevator', 
            github_url: 'https://github.com/isagul/elevator', 
            live_url: 'https://app-elevator.netlify.com/', 
            detail: 'Making an elevator app by using react.js.', 
            npm_link: null 
        },
        { 
            name: 'ng-pagination-component', 
            github_url: 'https://github.com/isagul/ng-pagination-component', 
            live_url: 'https://isagul.github.io/ng-pagination-component/', 
            detail: 'The lightest and simplest solution for pagination in Angular.', 
            npm_link: 'https://www.npmjs.com/package/ng-pagination-component' 
        },
        { 
            name: 'react-weather-app', 
            github_url: 'https://github.com/isagul/react-weather-app', 
            live_url: 'https://isagul.github.io/react-weather-app/', 
            detail: 'Learn weather of city where you live in.', 
            npm_link: null 
        },
        { 
            name: 'react-webpack-starter-kit', 
            github_url: 'https://github.com/isagul/react-webpack-starter-kit', 
            live_url: '', 
            detail: 'Simple starter kit using react and webpack.', 
            npm_link: null 
        }
    ];

    const projects = myProjects.map((project, index) => {
        return (
            <div className="project" key={index}>
                <div className="project-title">
                    <a href={`${project.github_url}`} target="_blank" rel="noopener noreferrer" className="project-name-link">
                        <p className="project-name">{project.name}</p>
                    </a>
                    {
                        project.live_url.length > 0 &&
                        <a href={`${project.live_url}`} target="_blank" rel="noopener noreferrer" className="project-live-link">
                            <p className="live-link-text">Live</p>
                        </a>
                    }
                    {
                        project.npm_link !== null &&
                        <a href={`${project.npm_link}`} target="_blank" rel="noopener noreferrer" className="project-npm-link">
                            <i className="fab fa-npm live-link-text"></i>
                        </a>
                    }
                </div>
                <p className="project-detail">{project.detail}</p>
            </div>
        )
    })

    return (
        <App>
            <div className="info">
                <h1>My Open Source Projects</h1>
                <p>I am passionate about open source software and giving back to others.</p>
            </div>
            <div className="projects">
                {projects}
            </div>
        </App>
    )
}

export default Projects;