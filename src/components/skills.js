import React from 'react';
import {Line} from 'rc-progress';

export default class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jsBar: 0,
            reactBar: 0,
            cssBar:0,
            htmlBar: 0,
            angularBar:0,
            sassBar:0,
            webpackBar:0
        }
    }
    componentDidMount() {
        this.startInterval("jsInt","jsBar");
        this.startInterval("reactInt","reactBar");
        this.startInterval("cssInt","cssBar");
        this.startInterval("htmlInt","htmlBar");
        this.startInterval("angularInt","angularBar");
        this.startInterval("sassInt","sassBar");
        this.startInterval("webpackInt","webpackBar");
    }


    componentDidUpdate() {
        this.stopInterval(this.state.jsBar, 80,this.jsInt);
        this.stopInterval(this.state.reactBar, 70,this.reactInt);
        this.stopInterval(this.state.cssBar, 75,this.cssInt);
        this.stopInterval(this.state.htmlBar, 85,this.htmlInt);
        this.stopInterval(this.state.angularBar, 75,this.angularInt);
        this.stopInterval(this.state.sassBar, 85,this.sassInt);
        this.stopInterval(this.state.webpackBar, 75,this.webpackInt);
    }

    startInterval = (intervalName, key) => {
        this[intervalName] = setInterval(() => {
            this.setState({
                [key]: this.state[key] + 1
            })
        },10)
    }

    stopInterval = (skill, knowledgeValue,interval) => {
        if(skill === knowledgeValue) {
            clearInterval(interval);
        }
    }

    goIcons() {
        let iconDiv = document.getElementById("icons-div");
        iconDiv.scrollIntoView({behavior: 'smooth'});
    }

    

    render() {
        const ProgressBar = (props) => {
            const { barValue } = props;
            return (
                <div>
                    <Line 
                        percent={barValue}
                        strokeWidth="1.3" 
                        strokeColor="orange" 
                        />
                </div>
            )
        }
        return (
            <div className="skills">                               
                <h3> <i className="fas fa-hand-point-right"></i>     
                    MY SKILLS</h3>
                <div className="skill-progress">  
                    <i className="fab fa-html5" title="html"></i>
                    <ProgressBar barValue = {this.state.htmlBar} /> 
                    <p>{this.state.htmlBar}%</p>
                      
                    <i className="fab fa-css3-alt" title="css"></i>
                    <ProgressBar barValue = {this.state.cssBar} /> <p>{this.state.cssBar}%</p>                
                    <i className="fab fa-js" title="javascript"></i>
                    <ProgressBar barValue = {this.state.jsBar} />
                    <p>{this.state.jsBar}%</p>
                    <i className="fab fa-react" title="react"></i>
                    <ProgressBar barValue = {this.state.reactBar} />
                    <p>{this.state.reactBar}%</p>                            
                    <i className="fab fa-angular" title="angular"></i>
                    <ProgressBar barValue = {this.state.angularBar} /> <p>{this.state.angularBar}%</p>
                    <i className="fab fa-sass" title="sass"></i>
                    <ProgressBar barValue = {this.state.sassBar} /> <p>{this.state.sassBar}%</p>
                    <img src={require('../assets/images/webpack.png')} title="webpack" alt ="webpack_image"/>
                    <ProgressBar  barValue = {this.state.webpackBar} /> <p>{this.state.webpackBar}%</p>
                </div>
            </div>
        )
    }
}