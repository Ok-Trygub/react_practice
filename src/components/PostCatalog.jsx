import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";

function PostCatalog() {

    const [posts, setPosts] = useState([]);
    console.log(posts)

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await res.json();
            console.log(data)

            if (!data) return;
            setPosts(data);
        }

        getPosts();
    }, [])


    return (
        <div className="posts">
            <ul className="posts__list">
                {posts.map(item => <PostItem post={item} key={item.id}/>)}
            </ul>
        </div>
    )
}

export default PostCatalog;
