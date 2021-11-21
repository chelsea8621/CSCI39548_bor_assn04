import { render } from '@testing-library/react';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component{
    render() {
        return (
            <div className='background'>
                <h1 className='title'>User Profile</h1>
                <div style={{textAlign:'center'}}>                
                    <div>Username: {this.props.userName}</div>
                    <div>Member Since:{this.props.memberSince}</div>
                    <Link to="/">Return to Home</Link>
                </div>

            </div>
    
            
        )
    }
}

export default UserProfile;