// src/components/Credits.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Credits extends Component {
    render() {
        let credits = this.props.credits;
        return (
            <div className='background'>
                <h1 className='title'>Credits</h1>
                <div className='history'>
                    {credits.map(credit => (
                        <div key={credit.id}>
                            <li>{credit.amount} {credit.description} {credit.date.slice(0, 10)}</li>
                        </div>
                    ))}
                    <div className='balance'><AccountBalance accountBalance={this.props.accountBalance}/></div>
                    <form onSubmit={this.props.addCredit}>
                        <p>
                            <label id="description"> Description: </label>
                            <input type="text" name="description"/>
                            <label id="amount"> Amount: </label>
                            <input type="number" name="amount"/>
                            <button type="submit"> Submit</button>
                        </p>
                    </form>
                    <div className='link'>
                   <Link to="/"> Home </Link>
                    <Link to="/Login"> Login </Link>
                    <Link to="/UserProfile"> User Profile </Link>
                    <Link to="/Debits"> Debits </Link>

                    </div>
 

                </div>
            </div>

        );
    }
}

export default Credits;

