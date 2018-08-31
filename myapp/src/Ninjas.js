import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        const  ninjas  = this.props.ninjas;
        return(
            ninjas.map(ninja => {
                return (
                    <div className="ninja" key={ninja.id}>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Clan: { ninja.clan }</div>
                    </div>
                );
            })
        )
    }
}

export default Ninjas;