import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const showAllArticles = () => {
      navigate('posts')
    }

    return (
        <div className='container'>
            <h2>Sample App to explore React-Router-Dom v6</h2>
            <button
            onClick={showAllArticles}
            >All Articles</button>
            <Outlet />
        </div>
    );
}
 
export default Home;