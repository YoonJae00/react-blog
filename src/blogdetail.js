import { useParams } from "react-router-dom";
import { Container, Card } from 'react-bootstrap';

function Detail({blogdata}) {

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