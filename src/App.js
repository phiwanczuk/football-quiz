import React, { Component } from 'react';
import './App.css';
import Question from "./Components/Question/Question";

class App extends Component {
  render() {
    return (
      <div>
        <Question content={"siema"}/>
      </div>
    );
  }
}

export default App;
