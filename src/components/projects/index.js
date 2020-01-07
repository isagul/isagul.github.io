import React from 'react';
import Header from '../header/index';
import './style.scss';

const Projects = () => {
    const myProjects = [
        {name: 'ng-pagination-component', github_url: 'https://github.com/isagul/ng-pagination-component', live_url: 'https://isagul.github.io/ng-pagination-component/', detail: 'The lightest and simplest solution for pagination in Angular.'},
        {name: 'react-scroll-component', github_url: 'https://github.com/isagul/react-scroll-button', live_url: 'https://isagul.github.io/react-scroll-button/', detail: 'Show a scroll button when you scrolled the page.'},
        {name: 'periodic-table', github_url: 'https://github.com/isagul/periodic-table', live_url: 'https://app-periodic-table.netlify.com/', detail: 'Periodic table with ReactJS.'},
        {name: 'nytimesbooks', github_url: 'https://github.com/isagul/nytimesbooks', live_url: 'https://app-nytimes.herokuapp.com/', detail: 'A shopping cart project which lists books. It also allows you adding into basket and deleting item from basket by using hooks and context-api.'},
        {name: 'react-weather-app', github_url: 'https://github.com/isagul/react-weather-app', live_url: 'https://isagul.github.io/react-weather-app/', detail: 'Learn weather of city where you live in.'},
        {name: 'react-webpack-starter-kit', github_url: 'https://github.com/isagul/react-webpack-starter-kit', live_url: '', detail: 'Simple starter kit using react and webpack.'}
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
                </div>                 
                <p className="project-detail">{project.detail}</p>
            </div>
        )
    })

    return (
        <div className="app">
            <Header />
            <div className="info">
                <h1>My Open Source Projects</h1>
                <p>I am passionate about open source software and giving back to others.</p>
            </div>
            <div className="projects">                
                {projects}
            </div>
        </div>
    )
}

export default Projects;