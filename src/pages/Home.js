// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import './style.css'
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className='background'>
          <img src="https://picsum.photos/201" alt="bank"/>
          <h1 className='title'>Bank of React</h1>
          <div className='link'>
            <Link  to="/userProfile">User Profile</Link> <br/>
            <Link to="/Login">Login </Link> <br/>
            <Link to="/Debits">Debits </Link> <br/> <br/>
            <Link to="/Credits">Credits </Link> <br/> <br/>
          </div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;