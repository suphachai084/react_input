import React from 'react';
import {  NavLink } from 'react-router-dom';
class input extends React.Component {
	  constructor() {
    super();
    this.state = { user: "" };

  }

    setAge(e){
    var age = e.target.value;
    this.setState({user:age});
    }
  
    render(){
        return (
            <div>
        <input type="text" onChange={this.setAge.bind(this)} ref="name"/>
        <NavLink to={{pathname:"/Page2/"+this.state.user}} activeClassName="active"><input type="submit" /></NavLink>
      
            </div>
        );
    }
}

export default input;