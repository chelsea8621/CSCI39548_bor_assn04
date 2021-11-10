import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import axios from "axios"
import './App.css'

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
      creditsTotal+=credit;
    })
    debits.forEach((debit)=>{
      debitsTotal+=debit;
    })
    this.setState({accountBalance:creditsTotal-debitsTotal});
  }
  addCredit=(credit)=>{
    this.setState({credits:this.state.credits.concat(credit)});
    this.refreshBalance();
  }

  addDebit=(debit)=>{
    this.setState({debits:this.state.debits.concat(debit)});
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
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
          </div>
        </Router>
    );
  }
}

export default App
