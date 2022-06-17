import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import NotFound from "./NotFound";

const digitRegex = /^\d+$/

const Article = () => {

    const { postId } = useParams()

    const [post, setPost] = useState()
    const navigate = useNavigate()

    useEffect(() => {

        if(!digitRegex.test(postId)){
            console.log('true')
            navigate('not-found',{
                replace: true
            })
        }
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(res => res.json())
        .then(post => setPost(post))
    }, [postId])

    return (
        <>
            {!post && <Loading />}
            { post && (
                <div className="card">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                )
            }
        </>
    );
}
 
export default Article;