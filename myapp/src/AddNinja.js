import React, { Component } from 'react';

class AddNinja extends Component {
    state ={
        name: null,
        age: null,
        belt: null,
        id: Math.round(Math.random()*10000)
    };

    handleChange = (e) =>{
      this.setState({
          [e.target.id]: e.target.value
      })
    };
    handleSubmit = (e) => {
      e.preventDefault();
      console.dir(e.target);
      this.props.addNinja(this.state);
    };

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="age">Age:
                        <input type="text" id="age" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="clan">Clan:
                        <input type="text" id="clan" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="add"/>
                </form>
            </div>
        );
    }
}

export default AddNinja;