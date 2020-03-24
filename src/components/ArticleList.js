import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Col,
    Card 
} from 'react-bootstrap';

const ArticleList = ({ articles }) => (
    <>  
        {articles.map((article, key) => (
            <Col xs={12} md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{article.subTitle}</Card.Subtitle>
                        <Card.Text>
                            <p>
                                {article.content[0].substring(0,150)}...
                            </p>
                        </Card.Text>
                        <Link key={key} to={`/article/${article.id}`}>Card Link</Link>
                    </Card.Body>
                </Card>
            </Col>  
        ))}
    </>
);

export default ArticleList;