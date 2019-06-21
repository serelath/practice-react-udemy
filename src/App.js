import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {name: 'Maximilian', age: 28},
      {name: 'Manula', age: 29},
      {name: 'Stephie', age: 26}
    ]})
  }

  render() {
    return (
      <div className="App">

  	      <div>
            <h1>Hi, I'm a React App!!</h1>
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

          </div>

      </div>
    );
  }
}

export default App;
