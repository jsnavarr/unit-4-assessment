import React, { Component } from 'react';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      circleSelected: 1
    };
  }

  handleCircleSelect = (idx) => {
    // console.log(idx);
    this.setState({ circleSelected: idx });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circleSelected = {this.state.circleSelected}
            handleCircleSelect={this.handleCircleSelect}
          />
          <Circles
            circleSelected = {this.state.circleSelected}
            />
        </main>
      </div>
    );
  }
}

export default App;
