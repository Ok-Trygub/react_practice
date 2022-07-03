import React from 'react';

function PostItem(props) {

    return (
        <li className="posts_single-post" data-post-id="Id поста">
            <h3 className="posts__post-title">{props.post.title}</h3>
            <p className="posts__post-description">{props.post.body}</p>
        </li>
    )
}

export default PostItem;
