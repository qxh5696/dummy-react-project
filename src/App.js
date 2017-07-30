import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHover from 'react-hover';


const hoverOptions = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactHover options={hoverOptions}>
            <ReactHover.Trigger>
                <h1 style={{background: '#abbcf1', width: '200px'}}> Hover on me </h1>
            </ReactHover.Trigger>
            <ReactHover.Hover>
                <h1> I am hover HTML </h1>
            </ReactHover.Hover>
        </ReactHover>

      </div>
    );
  }
}

export default App;
