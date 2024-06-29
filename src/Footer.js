import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState} from 'react';

function Footer() {
    
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
      const storedUser = localStorage.getItem('userinfo');
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      setUserInfo(parsedUser);
  }, []);

  return (
    <footer className="bg-dark text-white mt-5 p-2 text-center">
      <Container>
        <Row>
          <Col>
            <Button variant="light" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Col>
          {userInfo ? `${userInfo.userName}님 ㅎ2` : `로그인 하세요` } 
          <Col>
            <Button variant="success" onClick={scrollToTop}>
              Scroll to Top
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} YoonJae. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;