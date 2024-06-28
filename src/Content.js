import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Content({blogdata, setblogdata}) {



  return (
    <Container className="mt-5">
      <Row>
        {blogdata.map((post) => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={post.img} style={{ height: '200px', width: '100%', objectFit: 'contain' }}/>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By {post.author} on {post.date}
                </Card.Subtitle>
                <Card.Text>{post.summary}</Card.Text>
                <Button variant="primary" as={Link} to={`/detail/${post.id}`}>
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