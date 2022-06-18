import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useMatch } from "react-router-dom";
import RouteController from "./controllers/RouteController";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function MatchPath({ path, Comp }) {
  let match = useMatch(path);
  return match ? <Comp {...match} /> : null;
}

function App() {
  return (
    <Container>
      {/* <RouteController /> */}
      <Router>
                {/* <MatchPath path='/' Comp={Home} />
                <MatchPath path='posts/:postId' Comp={Article} />
                <MatchPath path='posts/' Comp={ArticleList} />
                <MatchPath path='*' Comp={NotFound} /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='posts/:postId' element={<Article />} />
                <Route path='posts/' element={<ArticleList />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    </Container>
  );
}
 
export default App;