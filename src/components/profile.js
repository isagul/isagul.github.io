import React from 'react';
import {Animated} from "react-animated-css";

export default class Profile extends React.Component {

    render() {
        return (
            <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                <div className="profile">
                    <img src={require('../assets/images/profile_image.jpg')} alt="isa_gul_profile_image"/>
                    <div className="profile-info">
                        <p>İsa Gül</p>
                        <p>Jr. Front-End Developer</p>    
                        <p>"I'm gonna start a revolution from my bed"</p>    
                    </div>
                </div>   
            </Animated>
        )
    }
}