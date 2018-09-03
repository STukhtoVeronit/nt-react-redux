import React from 'react'

const Contact = (props) =>{
    setTimeout(()=>{ //programmatic redirect
        props.history.push('/about');
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias earum laborum mollitia nobis! Adipisci, aliquid, architecto delectus dolore eos maxime nobis non odit officiis, repellat sint sit voluptatibus voluptatum.</p>
        </div>
    )
};

export default Contact;