import React from 'react';
import './profile.scss';


const Profile = () => {
    return (
        <div className="profile">
            <img src={require('../assets/images/profile_image.jpg')} alt="isa_gul_profile_image"/>
            <div className="profile-info">
                <p>İsa Gül</p>
                <p>Front-End Developer</p>    
                <p>"I'm gonna start a revolution from my bed"</p>    
            </div>
        </div>  
    )
}

export default Profile;