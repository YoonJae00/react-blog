import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Navbar';
import bg from './img/bg.png'
import Content from './Content';
import {Route, Routes, Link} from 'react-router-dom';
import { useState } from 'react';
import Detail from './blogdetail';
import Login from './Login';

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    author: "John Doe",
    date: "2024-06-24",
    summary: "This is a summary of the first blog post. It gives a brief overview of the content.",
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  },
  {
    id: 2,
    title: "Second Blog Post",
    author: "Jane Smith",
    date: "2024-06-25",
    summary: "This is a summary of the second blog post. It gives a brief overview of the content."
  },
  {
    id: 2,
    title: "Second Blog Post",
    author: "Jane Smith",
    date: "2024-06-25",
    summary: "This is a summary of the second blog post. It gives a brief overview of the content."
  }, {
    id: 2,
    title: "Second Blog Post",
    author: "Jane Smith",
    date: "2024-06-25",
    summary: "This is a summary of the second blog post. It gives a brief overview of the content."
  },
];

function App() {

  const [blogdata, setblogdata] = useState(posts);

  return (
    <div className="App">
         <Header/>
         <div className='main-bg'>
         </div>
         <Routes>
         <Route path='/' element={<Content blogdata={blogdata} setblogdata={setblogdata}/>}/>
         <Route path='/detail/:id' element={<Detail blogdata={blogdata}/>}/>
         <Route path='/login' element={<Login/>}/>
         </Routes>
    </div>
  );
}

export default App;
