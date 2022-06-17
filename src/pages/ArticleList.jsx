import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading";

const ArticleList = () => {
    
    const [posts, setPosts] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            <h1>All Articles</h1>
            { !posts && <Loading /> }
            { posts && posts.map(post => (
                <div className="card">
                    <a href={`/posts/${post.id}`}><h4>{post.title}</h4></a>
                    <p>{post.body.slice(0, 30)}...</p>
                </div>
            ))}
        </>
    );
}
 
export default ArticleList;