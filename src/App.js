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

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manula', age: 29},
      {name: 'Stephie', age: 26}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 28},
        {name: 'Manula', age: 29},
        {name: 'Stephie', age: 26}
      ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">

  	      <div>
            <h1>Hi, I'm a React App!!</h1>
            <button
              style={style}
              onClick={() => this.switchNameHandler('Maximilian!')}>Switch Name</button>
            <Person
              changed={this.nameChangedHandler}
              value={this.value}
              click={this.switchNameHandler.bind(this, 'Max!')}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

          </div>

      </div>
    );
  }
}

export default App;
