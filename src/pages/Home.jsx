import { Link, Outlet, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const showAllArticles = () => {
      navigate('posts')
    }

    return (
        <div className='container'>
            <h2>Sample App to explore React-Router-Dom v6</h2>
            <Link to='posts/'>
                <a>All Posts</a>
            </Link>
        </div>
    );
}
 
export default Home;