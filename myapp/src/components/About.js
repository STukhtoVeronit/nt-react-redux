import React from 'react'
import Rainbow from '../hoc/Rainbow';

const About = () =>{
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias earum laborum mollitia nobis! Adipisci, aliquid, architecto delectus dolore eos maxime nobis non odit officiis, repellat sint sit voluptatibus voluptatum.</p>
        </div>
    )
};

export default Rainbow(About);