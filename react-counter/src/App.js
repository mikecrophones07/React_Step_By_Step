import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        number: 0
      };
  }
  
  render(){
    const buttonClk = () => {
      this.setState({number: this.state.number + 1});
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={buttonClk}>Hello World
          </button>
          <p>{this.state.number}</p>
        </header>
      </div>
    );
  }
}

export default App;
