import React, { Component } from 'react'
import Posts from './Posts'
import axios from 'axios'

class Home extends Component{
    state = {
      posts: []
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                this.setState({
                    posts: res.data.slice(0,10)
                });
            })
            .catch((err) => {console.error(err)});
    };
    render(){

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias earum laborum mollitia nobis! Adipisci, aliquid, architecto delectus dolore eos maxime nobis non odit officiis, repellat sint sit voluptatibus voluptatum.</p>
                <Posts posts={this.state.posts}/>
            </div>
        );
    };
}

export default Home;