import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import axios from "axios"
import './App.css'
import AccountBalance from './pages/AccountBalance';



class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser:{
        userName: 'joe_shmo',
        memberSince: '07/23/96'
      },
      debits: [],
      credits:[],
    }
  }    

  balance=()=>
  {
    return this.state.accountBalance;
  }
  async componentDidMount()
  {
    let debits=await axios.get("https://moj-api.herokuapp.com/debits")
    let credits=await axios.get("https://moj-api.herokuapp.com/credits")

    debits=debits.data
    credits=credits.data

    var creditSum=0;
    var debitSum=0;
    debits.forEach((debit)=>{
      debitSum+=debit.amount
    })
    credits.forEach((credit)=>{
      creditSum+=credit.amount
    })

    let accountBalance=creditSum-debitSum;
    this.setState({debits,credits,accountBalance});
    console.log(debits);
  }

  refreshBalance=()=>{
    var credits=this.state.credits;
    var debits=this.state.debits;

    var creditsTotal=0;
    var debitsTotal=0;
    credits.forEach((credit)=>{
      creditsTotal+=credit.amount;
    })
    debits.forEach((debit)=>{
      debitsTotal+=debit.amount;
    })
    this.setState({accountBalance:creditsTotal-debitsTotal});
  }
  
  addCredit=()=>{
    console.log(this.state.credits);
    var credit={
      amount:50,
      date:"111",
      description:"ssf",
      id:"c334"
    }
    this.setState({credits:this.state.credits.concat(credit)});
    this.refreshBalance();
  }

  addDebit=()=>{
    this.setState({debits:this.state.debits.concat()});
    this.refreshBalance();
  }

  mockLogIn = (logInInfo) => {
      const newUser = {...this.state.currentUser}
      newUser.userName = logInInfo.userName
      this.setState({currentUser: newUser})
  }
        
            
        
  
  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    
    );
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    


    return ( 
    
    
        <Router>
          <div>
            <button onClick={this.addCredit}>
                Add credit
            </button>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <AccountBalance accountBalance={this.state.accountBalance}/>

          </div>
        </Router>
        


    );

  }
}

export default App
