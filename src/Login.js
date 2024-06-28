import React, { useState } from 'react';
import { Card, Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';

let loginform = [{
  id : 'user01' , pw : 'pass01'
}, {
  id : 'user02' , pw : 'pass02'
}]

function Login({loginStat, setloginStat}) {

    const [inputId, setinputId] = useState("");
    const [inputPw, setinputPw] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const loginHandler = () => {
      const user = loginform.find(user => user.id == inputId && user.pw == inputPw);
      if (user) {
        setLoginMessage("로그인 성공!");
        console.log('success')
        setloginStat(true);
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
              <Button variant="info" className='ms-3'>회원가입</Button>
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