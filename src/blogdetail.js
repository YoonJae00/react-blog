import { useParams } from "react-router-dom";
import { Container, Card } from 'react-bootstrap';
import styled from "styled-components";
import { useEffect, useState } from "react";


let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px
`;

let YellowBox = styled.div`
    background : yellow;
    display : ${props => props.isDone}
`

function Detail({blogdata}) {

    const [isblock, setisblock] = useState('block');

    useEffect(() => {
        let timer = setTimeout( () => {
            setisblock('none')
        },3000)

        return () => {
            // clean-up 함수
            // 기존 함수 제거 fetch 들고 올때 재렌더링 되면 제거할때 쓰면 될듯
            clearTimeout(timer);
        }
    },[]);

    const {id} = useParams();
    const post = blogdata.find(p => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
      }

    return (
        <>
             <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src={post.img} className="card-img-custom" style={{ height: '200px', width: '100%', objectFit: 'contain' }}/>
        <Card.Body>
            <YellowBox isDone={isblock}>이거 클릭하면 문상 드림</YellowBox>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            By {post.author} on {post.date}
          </Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
        </>
    )

}

export default Detail;