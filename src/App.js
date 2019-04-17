import React, { Component } from 'react'
import './App.css'
import Landing from './Landing/Landing'
import Main from './Main/Main'

class App extends Component {


  render() {
    return (
      <div className="App">
      {this.state.token ?
      <Main />
      :
      <Landing onLogin={this.onLogin} />
      }
      </div>
    );
  }
}

export default App;
