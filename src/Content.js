import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Content({blogdata, setblogdata}) {



  return (
    <Container className="mt-5">
      <Row>
        {blogdata.map((post) => (
          <Col key={post.blogCode} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={post.blogImg} style={{ height: '200px', width: '100%', objectFit: 'contain' }}/>
                <Card.Title>{post.blogTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By {post.blogAuthor} on {post.startTime}
                </Card.Subtitle>
                <Card.Text>{post.blogSummary}</Card.Text>
                <Button variant="primary" as={Link} to={`/detail/${post.blogCode}`}>
                  상세보기
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Content;