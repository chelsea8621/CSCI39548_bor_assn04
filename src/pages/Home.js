    // src/components/Home.js
    
    import React, { Component } from 'react';
    import AccountBalance from './AccountBalance';

    class Home extends Component {
      render() {
        return (
            <div>
              <img src="https://www.reuters.com/resizer/R13b7gZ-xOpJZSviLQNCkRUIhD0=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C44YCSGHYJNU3FOAERYSMGIBWI.jpg" alt="bank"/>
              
              <h1>Bank of React</h1>  

              <AccountBalance accountbalance={this.props.accountbalance}/>
            
            </div>
        );
      }
    }
    
    export default Home;