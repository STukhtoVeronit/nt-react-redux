import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        const  ninjas  = this.props.ninjas;
        const  deleteNinja = this.props.deleteNinja;
        return(
            ninjas.map(ninja => {
                return (
                    <div className="ninja" key={ninja.id}>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Clan: { ninja.clan }</div>
                        <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
                    </div>
                );
            })
        )
    }
}

export default Ninjas;