import Home from './components/home/Home';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import Error from './components/error/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';
import Signup from './components/signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/signup" element={<Signup />} />  
          <Route path="*" element={<Error />} />
        </Routes>
      </div> 
    </Router>

  );
}

export default App;
