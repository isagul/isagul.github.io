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
        this.jsInt = setInterval(() => {
            this.setState({
                jsBar: this.state.jsBar + 1
            })
        },10);
        this.reactInt = setInterval(() => {
            this.setState({
                reactBar: this.state.reactBar + 1
            })
        },10);
        this.cssInt = setInterval(() => {
            this.setState({
                cssBar: this.state.cssBar + 1
            })
        },10);
        this.htmlInt = setInterval(() => {
            this.setState({
                htmlBar: this.state.htmlBar + 1
            })
        },10);
        this.angularInt = setInterval(() => {
            this.setState({
                angularBar: this.state.angularBar + 1
            })
        },10);
        this.sassInt = setInterval(() => {
            this.setState({
                sassBar: this.state.sassBar + 1
            })
        },10);
        this.webpackInt = setInterval(() => {
            this.setState({
                webpackBar: this.state.webpackBar + 1
            })
        },10);
    }


    componentDidUpdate() {
        if(this.state.jsBar === 80) {
            clearInterval(this.jsInt);
        }
        if(this.state.reactBar === 70) {
            clearInterval(this.reactInt);
        }
        if(this.state.cssBar === 75) {
            clearInterval(this.cssInt);
        }
        if(this.state.htmlBar === 85) {
            clearInterval(this.htmlInt);
        }
        if(this.state.angularBar === 75) {
            clearInterval(this.angularInt);
        }
        if(this.state.sassBar === 85) {
            clearInterval(this.sassInt);
        }
        if(this.state.webpackBar === 80) {
            clearInterval(this.webpackInt);
        }
    }

    goIcons(params) {
        let iconDiv = document.getElementById("icons-div");
        iconDiv.scrollIntoView({behavior: 'smooth'});
    }

    render() {
        return (
            <div className="skills">                               
                <h3> <i className="fas fa-hand-point-right"></i>     
                    MY SKILLS</h3>
                <div className="skill-progress">  
                    <i className="fab fa-html5"></i>
                    <Line 
                        style={{marginTop:'8px'}}
                        percent={this.state.htmlBar}
                        strokeWidth="1.3" 
                        strokeColor="orange" /> <p>{this.state.htmlBar}%</p>  
                    <i className="fab fa-css3-alt"></i>
                    <Line 
                        style={{marginTop:'8px'}}
                        percent={this.state.cssBar}
                        strokeWidth="1.3" 
                        strokeColor="orange" /> <p>{this.state.cssBar}%</p>                
                    <i className="fab fa-js"></i>
                    <Line 
                        style={{marginTop:'8px'}}
                        percent={this.state.jsBar}
                        strokeWidth="1.3" 
                        strokeColor="orange" /> 
                    <p>{this.state.jsBar}%</p>
                    <i className="fab fa-react"></i>
                    <Line 
                        style={{marginTop:'8px'}}
                        percent={this.state.reactBar}
                        strokeWidth="1.3" 
                        strokeColor="orange" /> 
                    <p>{this.state.reactBar}%</p>                            
                    <i className="fab fa-angular"></i>
                    <Line 
                        style={{marginTop:'8px'}}
                        percent={this.state.angularBar}
                        strokeWidth="1.3" 
                        strokeColor="orange" /> <p>{this.state.angularBar}%</p>
                    <i className="fab fa-sass"></i>
                    <Line 
                        style={{marginTop:'8px'}}
                        percent={this.state.sassBar}
                        strokeWidth="1.3" 
                        strokeColor="orange" /> <p>{this.state.sassBar}%</p>
                    <img src={require('../assets/images/webpack.png')} alt ="webpack_image"/>
                    <Line 
                        style={{marginTop:'8px'}}
                        percent={this.state.webpackBar}
                        strokeWidth="1.3" 
                        strokeColor="orange" /> <p>{this.state.webpackBar}%</p>
                </div>
                <div className="follow-me">
                    <h1>FOLLOW ME !</h1>
                    <i className="fas fa-arrow-circle-down" onClick={() => this.goIcons()}></i>
                </div>
            </div>
        )
    }
}