// src/components/Credits.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Credits extends Component {
    render() {
        let credits = this.props.credits;
        return (
            <div>
                <h1>Credits</h1>
                <div>
                    {credits.map(credit => (
                        <div key={credit.id}>
                            <li>{credit.amount} {credit.description} {credit.date.slice(0, 10)}</li>
                        </div>
                    ))}
                    <AccountBalance accountBalance={this.props.accountBalance}/>
                    <form onSubmit={this.props.addCredit}>
                        <p>
                            <label id="description"> Description: </label>
                            <input type="text" name="description"/>
                            <label id="amount"> Amount: </label>
                            <input type="number" name="amount"/>
                            <button type="submit"> Submit</button>
                        </p>
                    </form>
                    <Link to="/"> Home </Link>
                    <Link to="/Login"> Login </Link>
                    <Link to="/UserProfile"> User Profile </Link>
                    <Link to="/Debits"> Debits </Link>

                </div>
            </div>

        );
    }
}

export default Credits;

