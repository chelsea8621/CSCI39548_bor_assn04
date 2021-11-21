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
          {debits.map( (debit) => {
              return (
                <div key={debit.id}>
                <li>{debit.amount} {debit.description} {debit.date}</li>
              </div> 
              )
          } )}
          <br/>
          <div> <AccountBalance accountBalance={this.props.accountBalance}/> </div>
          <br/>
          <div> <Link to="/">Home </Link> </div>
          
        </div>
        </div>
        
    );
  }
}

export default Debits;

