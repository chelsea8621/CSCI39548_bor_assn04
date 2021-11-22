// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import './style.css'
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className='background'>
          <h1 className='title'>Bank of React</h1>
          <img className='picture' src="https://picsum.photos/201" alt="bank"/>
          
          <div style={{textAlign: 'center'}}>
            <Link className='link' to="/userProfile">User Profile</Link> 
            <Link className='link' to="/Login">Login </Link> 
            <Link className='link' to="/Debits">Debits </Link> 
            <Link className='link' to="/Credits">Credits </Link> 
          </div>
          <div className='balance'>
            <AccountBalance accountBalance={this.props.accountBalance}/>

          </div>
          
        </div>
    );
  }
}

export default Home;