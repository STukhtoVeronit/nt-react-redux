import React from 'react';
import { Link } from  'react-router-dom';
import flowerImg from   '../../section8-image.png';

const Posts = (props) =>{
    const { posts } = props;

    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={flowerImg} alt=""/>
                    <div className="card-content">
                        <Link to={'/'+post.id}><span  className="card-title">{post.title}</span></Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center"> No posts yet</div>
    );
    return (
        <div className="container">
            <h5 className="center">Posts: </h5>
            {postList}
        </div>
    )
};

export default Posts;