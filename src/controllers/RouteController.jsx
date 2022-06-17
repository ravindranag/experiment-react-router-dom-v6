import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import MatchPath from "../components/MatchPath";
import Article from "../pages/Article";
import ArticleList from "../pages/ArticleList";
import NotFound from "../pages/NotFound";


const RouteController = () => {
    return (
        <BrowserRouter>
            <MatchPath path='*' Comp={App} />
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='posts/:postId' element={<Article />} />
                    <Route path='posts/' element={<ArticleList />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default RouteController;