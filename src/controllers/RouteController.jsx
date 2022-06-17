
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Article from "../pages/Article";
import ArticleList from "../pages/ArticleList";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


const RouteController = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='posts/:postId' element={<Article />} />
                <Route path='posts/' element={<ArticleList />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default RouteController;