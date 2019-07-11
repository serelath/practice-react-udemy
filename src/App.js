import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1 ,name: 'Max', age: 28},
      {id: 2 ,name: 'Manu', age: 29},
      {id: 3 ,name: 'Steph', age: 26}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manula', age: 29},
      {name: 'Stephie', age: 26}
    ]})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    console.log(id);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (

        <div>

          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonsHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
             />;
          })}

        </div>
      );
    };

    return (
      <div className="App">
  	      <div>
            <h1>Hi, I'm a React App!!</h1>
            <button
              style={style}
              onClick={this.togglePersonsHandler}>Show / Hide name</button>

              {persons}

          </div>

      </div>
    );
  }
}

export default App;
