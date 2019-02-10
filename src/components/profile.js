import React from 'react';
import {Animated} from "react-animated-css";

export default class Profile extends React.Component {

    render() {
        return (   
            <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                <div className="profile">
                    <div className="profile-image" >
                        <img src={require('../assets/images/profile_image.jpg')} alt="isa_gul_profile_image"/>                              
                    </div>
                    <div className="profile-info">
                        <p>Hi <img src={require('../assets/images/hand.png')} alt="hello_hand_image"/></p>
                        <p>I'm İsa <i className="far fa-grin-alt"></i></p>
                        <p>Jr. Frontend Developer <i className="fas fa-laptop-code"></i></p>          
                    </div>  
                    <div className="profile-slo">
                        <p>"I'm gonna start a revolution from my bed."</p>       
                    </div>
                </div> 
            </Animated>   
        )
    }
}