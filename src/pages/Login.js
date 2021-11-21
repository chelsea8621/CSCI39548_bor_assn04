// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)

    }
    
    return (
      <div className='background'>
        <form onSubmit={this.handleSubmit}>
          <div className='title'>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div className='title'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>

          <button>Log In</button>
          <div style={{textAlign: 'center'}}>
            <Link className='link' to="/">Home </Link> 
            <Link className='link' to="/userProfile">User Profile</Link> 
            
            <Link className='link' to="/Debits">Debits </Link> 
            <Link className='link' to="/Credits">Credits </Link> 
          </div>
          
        </form>
      </div>
    )
  }
}

export default LogIn