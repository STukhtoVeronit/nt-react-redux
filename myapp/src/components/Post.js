import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    state = {
        post: null
    };
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then((res)=>{
                this.setState({
                    post: res.data
                });
            })
            .catch((err) => {console.error(err)});
    };
    render(){
        let post = this.state.post ? (
            <div className="post card" key={this.state.post.id}>
                <div className="card-content">
                    <span  className="card-title">{this.state.post.title}</span>
                    <p>{this.state.post.body}</p>
                </div>
            </div>
        ) : (
            <div className="center"> No posts yet</div>
        );
        return (
            <div className="container">
                <h4 className="center">Post</h4>
                {post}
            </div>
        );
    };
}

export default Post;