import React, { Component } from 'react';
import Ninjas from './Ninjas';
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
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
           return ninja.id !== id;
        });
        this.setState({
            ninjas: ninjas
        })
    };
    componentDidMount(){
      console.log('component mounting');
    };
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
    };
    render() {
        return (
          <div className="App">
              <h3>Ninjas</h3>
              <p>List of ninjas</p>
              <Ninjas deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas}/>
              <AddNinja addNinja = {this.addNinja}/>
          </div>
        );
    }
}

export default App;
