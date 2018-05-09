import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './User/UserInput'
import UserOutPut from './User/UserOutput'

import './App.css';

class App extends Component {
  state = {
    userName: "Muhammet Talha Şahin"
  }

  stateHandle = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.stateHandle} userName={this.state.userName}/>
        <UserOutPut userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
