import React,{Component} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  
  
  constructor()
  {
  super();
    this.state={
     accountBalance:14568.27
    }
  }

  render() {
    const HomeComponent=()=>(<Home accountBalance={this.state.accountBalance}/>);
    return (
      <Router> 
        <Routes>
                
        
          <Route exact path="/" render={HomeComponent}/>

        </Routes>
        
      </Router>

    );
  }
}

export default App;
