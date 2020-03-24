import React from 'react';
import ArticleList from '../components/ArticleList';
import articleContent from './article-content';
import { 
    Row } from 'react-bootstrap';

const ArticleListPage = () => (
    <>  
        <h1>Articles List</h1>
        <Row>
            <ArticleList articles={articleContent} />
        </Row>
    </>
)

export default ArticleListPage;