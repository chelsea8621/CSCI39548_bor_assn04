import React, {Component} from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" component={Home}/>
          </Routes>
        </Router>
    );
  }
}

export default App;
