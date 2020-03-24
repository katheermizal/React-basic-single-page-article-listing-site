import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import  ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotFoundPage';
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
            <NavBar />
            <Container className="main-container">
              <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/about" component={AboutPage} />
                <Route path="/articles-list" component={ArticleListPage} />
                <Route path="/article/:name" component={ArticlePage} />
                <Route component={NotFound} />
              </Switch>
            </Container> 
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
