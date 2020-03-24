import React from 'react';
import ArticleList from '../components/ArticleList';
import NotFound from './NotFoundPage';
import articleContent from './article-content';
import { 
    Row,
    Col
} from 'react-bootstrap';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.id === name);
    
    if(!article) return <NotFound />;

    const relatedArticles = articleContent.filter(article => article.id !== name);

    return (
        <>
            <Row>
                <Col xs>
                    <h1>{article.title}</h1>
                    {article.content.map((paragaraph, key) => (
                        <p key={key}>{paragaraph}</p>
                    ))}
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <h2>Related Articles</h2>
                </Col>
                <ArticleList articles={relatedArticles} />
            </Row>
        </> 
    );
};

export default ArticlePage;