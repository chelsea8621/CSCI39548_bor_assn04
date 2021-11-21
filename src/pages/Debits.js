// src/components/Debits.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Debits extends Component {
    render() {
        let debits = this.props.debits;
        return (
            <div>
                <h1>Debits</h1>
                <div>
                    {debits.map(debit => (
                        <div key={debit.id}>
                            <li>{debit.amount} {debit.description} {debit.date.slice(0, 10)}</li>
                        </div>
                    ))}
                    <AccountBalance accountBalance={this.props.accountBalance}/>
                    <form onSubmit={this.props.addDebit}>
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
                    <Link to="/Credits"> Credits </Link>

                </div>
            </div>

        );
    }
}

export default Debits;

