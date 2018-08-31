import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
    state = {
        ninjas: [
            {name: "Heteki", age: 28, clan: "Red Pet", id: 1 },
            {name: "Goru", age: 32, clan: "Deep Cave", id: 2 }
        ]
    };
  render() {
    return (
      <div className="App">
        <h3>Ninjas</h3>
        <p>List of ninjas</p>
        <Ninjas ninjas = {this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
