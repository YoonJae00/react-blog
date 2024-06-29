import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Navbar';
import bg from './img/bg.png'
import Content from './Content';
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom';
import { useState } from 'react';
import Detail from './blogdetail';
import Login from './Login';
import axios from 'axios';
import { useEffect } from 'react';
import Regist from './Regist';
import Footer from './Footer';
import Write from './Write';


function App() {

  const [blogdata, setblogdata] = useState([{}]);
  const [loginStat, setloginStat] = useState(false);

  useEffect(() => {
    const AuthResult = localStorage.getItem('loginStat');
    if(AuthResult){
      setloginStat(true);
    }
  }, []);

  useEffect(() => {
    axios.get('/blog')
    .then(response => {
      setblogdata(response.data)
    })
    .catch(error => {
      console.error('err',error)
    })
  }, []);

  console.log('dsadsa',blogdata);

  return (
    <div className="App">
         <Header loginStat={loginStat} setloginStat={setloginStat}/>
         <div className='main-bg'>
         </div>
         <Routes>
         <Route path='/' element={<Content blogdata={blogdata} setblogdata={setblogdata}/>}/>
         <Route path='/detail/:id' element={<Detail blogdata={blogdata}/>}/>
         <Route path='/login' element={<Login loginStat={loginStat} setloginStat={setloginStat}/>}/>
         <Route path='/regist' element={<Regist/>}/>
         <Route path='/write' element={<Write/>}/>
         <Route path='/secret' element={<><h1>Nest, Outlet 연습</h1><Outlet/></>}>
          <Route path='one' element={<h3>이스터에그 1</h3>}/>
          <Route path='two' element={<h3>이스터에그 2</h3>}/>
         </Route>
         <Route path='*' element={<div>404 Error</div>}/>
         </Routes>
         <Footer/>
    </div>
  );
}

export default App;
