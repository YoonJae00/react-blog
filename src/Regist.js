import { Link, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";

function Regist() {

    let navigate = useNavigate();

    const [regist, setregist] = useState({
        userId: '',
        userPw: '',
        userName: '',
        userGender: ''
    });

    const onChangeHandler = e => {
        setregist(
            {
                ...regist,
                [e.target.name]:e.target.value
            }
        )
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/regist', regist);
            if (response.status === 200) {
                navigate('/login'); // 성공적으로 회원가입 후 로그인 페이지로 이동
            } else {
                alert('회원가입 실패');
            }
        } catch (error) {
            console.error(error);
            alert('회원가입 실패');
        }
    };


    console.table(regist);


    return(
        <Container className="d-flex justify-content-center mt-5" style={{ minHeight: '100vh' }}>
            <Row>
                <Col md={12}>
                    <Card style={{ width: '30rem' }} className="mt-2">
                        <Card.Body>
                            <Card.Title>Regist</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">회원가입</Card.Subtitle>
                            <Card.Text>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">아이디</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                    name="userId" value={regist.userId} onChange={onChangeHandler}/>
                                </InputGroup>
                                <br />
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">비밀번호</InputGroup.Text>
                                    <Form.Control type="password" aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                                    value={regist.userPw} name="userPw" onChange={onChangeHandler} />
                                </InputGroup>
                                <br />
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">이름</InputGroup.Text>
                                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                                    value={regist.userName} name="userName" onChange={onChangeHandler}/>
                                </InputGroup>
                                <br />
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">성별</InputGroup.Text>
                                    <Form.Check
                                        type="radio"
                                        label="남"
                                        name="userGender"
                                        id="genderMale"
                                        className="ms-4 mt-2"
                                        value="male"
                                        onChange={onChangeHandler}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="여"
                                        name="userGender"
                                        id="genderFemale"
                                        className="ms-4 mt-2"
                                        value="female"
                                        onChange={onChangeHandler}
                                    />
                                </InputGroup>
                            </Card.Text>
                            <Button variant="success" className='ms-3' as={Link} to={'/login'}>로그인하러가기</Button>
                            <Button variant="info" className='ms-3' onClick={handleSubmit}>회원가입</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Regist;