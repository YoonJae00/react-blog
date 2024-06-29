import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login({loginStat, setloginStat}) {

    const [inputId, setinputId] = useState("");
    const [inputPw, setinputPw] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const [loginform, setloginform] = useState({});

    // useEffect(() => {
    //   axios.get('/userform')
    //   .then(response => setloginform(response.data));
    //   console.log(loginform);
    // }, []);

    useEffect(() => {
      axios.get('/userform')
        .then(response => {
          setloginform(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }, []);

    const loginHandler = () => {
      const user = loginform.find(user => user.userId == inputId && user.userPw == inputPw);
      if (user) {
        setLoginMessage("로그인 성공!");
        console.log('success')
        setloginStat(true);
        localStorage.setItem('loginStat','true');
        localStorage.setItem('userinfo',JSON.stringify(user))
      } else {
        setLoginMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
        console.log('실패')
      }
    }


  return (
    <Container className="d-flex justify-content-center mt-5" style={{ minHeight: '100vh' }}>
      <Row>
        <Col md={12}>
          <Card style={{ width: '30rem' }} className="mt-2">
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">로그인 하세요</Card.Subtitle>
              <Card.Text>
              <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">
                 아이디
             </InputGroup.Text>
              <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={inputId} onChange={ e => setinputId(e.target.value)}
             />
            </InputGroup>
                <br/>
                <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">
                 비밀번호
             </InputGroup.Text>
              <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={inputPw} onChange={ e => setinputPw(e.target.value)}
             />
            </InputGroup>
              </Card.Text>
              <Button variant="info" className='ms-3' as={Link} to={'/regist'}>회원가입</Button>
              <Button variant="success" className='ms-3' onClick={loginHandler}>로그인</Button>
              {loginMessage && <p className="mt-3">{loginMessage}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;