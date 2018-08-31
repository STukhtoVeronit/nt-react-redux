import React, { Component } from 'react';
import Ninjas from './Ninjas_2';
import AddNinja from './AddNinja';

class App extends Component {
    state = { //container component
        ninjas: [
            {name: "Heteki", age: 28, clan: "Red Pet", id: 1 },
            {name: "Goru", age: 32, clan: "Deep Cave", id: 2 }
        ]
    };
    addNinja = (ninja) => {
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        })
    };
    render() {
        return (
          <div className="App">
              <h3>Ninjas</h3>
              <p>List of ninjas</p>
              <Ninjas ninjas = {this.state.ninjas}/>
              <AddNinja addNinja = {this.addNinja}/>
          </div>
        );
    }
}

export default App;
