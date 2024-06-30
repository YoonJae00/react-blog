import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col, InputGroup , Modal} from "react-bootstrap";

function Write() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('userinfo');
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        setUserInfo(parsedUser);
        
    }, []);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [blogWrite, setblogWrite] = useState({
    blogAuthor : null,
    blogTitle : null,
    blogDetail : null,
    blogImg : null,
    blogSummary : null,
    startTime : new Date().toISOString()
  });


    const blogSubmit = async () => {
        try{
            const response = await axios.post('/blog',blogWrite);
            if(response.status === 200){
                alert('등록 성공!')
            }else{
                alert('실패')
            }
        } catch (error) {
            console.error(error)
        }
    }

  console.log(blogWrite);

  useEffect(() => {
    if(userInfo){
        setblogWrite({
            ...blogWrite,
            blogAuthor : userInfo.userName
        })
    }
  }, []);

  const onChangeHandler = e => {
    setblogWrite({
        ...blogWrite,
        [e.target.name] : e.target.value
    })
  }
    return (
        <>        
        <Container>
            <Row>
                <h3>글작성</h3>
                <p className="text-end">{userInfo ? `${userInfo.userName}님 작성중` : ''}</p>
            </Row>
            <Form>
                <Row className="mb-3">
                    <Col md={{ span: 6, offset: 6 }}>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">요약정보</InputGroup.Text>
                            <Form.Control
                                placeholder="요약정보를 작성해주세요"
                                value={blogWrite.blogSummary}
                                onChange={onChangeHandler}
                                name="blogSummary"
                            />
                             <Button variant="primary" onClick={handleShow}>
                                이미지 삽입
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Form.Group controlId="formBlogTitle" className="mb-3">
                    <Form.Label>제목</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={blogWrite.blogTitle}
                        name="blogTitle"
                        onChange={onChangeHandler}
                    />
                </Form.Group>
                <Form.Group controlId="formBlogDetail" className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="내용을 입력하세요"
                        value={blogWrite.blogDetail}
                        name="blogDetail"
                        onChange={onChangeHandler}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={blogSubmit}>
                    작성
                </Button>
            </Form>
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>이미지 삽입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form.Group controlId="formBlogTitle" className="mb-3">
                    <Form.Label>이미지</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이미지 URL을 입력하세요"
                        value={blogWrite.blogImg}
                        name="blogImg"
                        onChange={onChangeHandler}
                    />
                </Form.Group>
                <img src={blogWrite.blogImg} class="rounded mx-auto d-block" alt="blogImg"></img>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Save Changes
        </Button>
        </Modal.Footer>
        </Modal>
        
        </>

    );
}

export default Write;