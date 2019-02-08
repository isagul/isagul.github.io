import React from 'react';
import {Animated} from "react-animated-css";

export default class Profile extends React.Component {

    render() {
        return (
            <div className="profile">
                <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                    <img src={require('../assets/images/profile_image.jpg')} alt="isa_gul_profile_image"/>
                    <p>İsa Gül</p>
                    <p>Jr. Front-End Developer</p>       
                </Animated>
            </div>
        )
    }
}