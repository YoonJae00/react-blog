import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Content() {
  const [blogdata, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 6;

  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs', {
          params: {
            page: currentPage - 1,
            size: postsPerPage,
          },
        });
        setBlogData(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-5">
      <Row>
        {blogdata.map((post) => (
          <Col key={post.blogCode} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={post.blogImg} style={{ height: '200px', width: '100%', objectFit: 'contain' }} />
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
      <Row>
        <Col>
          <Pagination className="mt-4 justify-content-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;