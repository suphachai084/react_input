import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { input ,output} from './component';
import {queryString} from 'query-string';

class App extends Component {
  constructor(){ super();

    
  }
  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        
          <ul>
            <NavLink to="/" activeClassName="active">PageInput</NavLink>
          </ul>
        </div>

        <div className="App-intro">
          <Switch>
              <Route path="/" component={input} exact={true} />
              <Route path="/Page2/:value" component={output} exact={true} />
          </Switch>
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;