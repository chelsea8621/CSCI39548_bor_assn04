// src/components/Debits.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component {
    render() {
        let debits = this.props.debits;
        console.log(debits);
        return (
            <div>
                <h1>Debits</h1>
                <div>
                    {debits.map((debit) => {
                        return (
                            <div key={debit.id}>
                                <li>{debit.amount} {debit.description} {debit.date}</li>
                            </div>
                        )
                    })}
                    <div><AccountBalance accountBalance={this.props.accountBalance}/></div>
                    <form onSubmit={this.props.addDebit}>
                        <p>
                            <label id="description"> Description: </label>
                            <input type="text" id="description"/>
                            <label id="amount"> Amount: </label>
                            <input type="number" id="amount"/>
                            <button type="button"> Submit</button>
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

