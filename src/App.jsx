import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteController from "./controllers/RouteController";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Container>
      {/* <RouteController /> */}
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='posts/:postId' element={<Article />} />
                <Route path='posts/' element={<ArticleList />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </Container>
  );
}
 
export default App;