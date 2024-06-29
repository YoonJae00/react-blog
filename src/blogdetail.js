import { useParams } from "react-router-dom";
import { Container, Card, Toast} from 'react-bootstrap';
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

    const [toastStat, settoastStat] = useState(false);

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
    const post = blogdata.find(p => p.blogCode === parseInt(id));

    const startTimeString = post.startTime;
    const dateObj = new Date(startTimeString);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    const formattedStartTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    useEffect(() => {
      post.newTime = formattedStartTime
    }, []);

    console.log(post);

    if (!post) {
        return <div>Post not found</div>;
      }

    return (
        <>
             <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src={post.blogImg} className="card-img-custom" style={{ height: '200px', width: '100%', objectFit: 'contain' }}/>
        <Card.Body>
            <YellowBox isDone={isblock} onClick={() => {
              settoastStat(true)
            }}>이거 클릭하면 문상 드림</YellowBox>
            <ToastTest toastStat={toastStat} settoastStat={settoastStat}/>
          <Card.Title>{post.blogTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            By {post.blogAuthor} on {post.newTime}
          </Card.Subtitle>
          <Card.Text>{post.blogDetail}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
        </>
    )

}

function ToastTest({toastStat, settoastStat}) {
  


  useEffect(() => {
    let timer = setTimeout( () => {
        settoastStat(false)
    },1000)

    return () => {
      clearTimeout(timer)
    }
    
  }, [toastStat]);
  return (
    <Toast show={toastStat} onClose={ () => {settoastStat(!toastStat)}}>
          <Toast.Header>
            <strong className="me-auto">클릭이벤트</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>진짜 클릭하네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Toast.Body>
        </Toast>
  );
}

export default Detail;