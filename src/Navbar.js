import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Header({loginStat, setloginStat}) {

    let navigate = useNavigate();

    const logoutHandler = () => {
      setloginStat(false);
      localStorage.removeItem('loginStat');
      localStorage.removeItem('userinfo')
    }
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">React-Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Outlet Remember" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/secret/one">
                secret
              </NavDropdown.Item>
              <NavDropdown.Item href="/secret/two">secret 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {
              loginStat === true ?      <Nav.Link onClick={() => navigate('/write')}>
              글작성
            </Nav.Link> : <Nav.Link> 로그인해야 글작성 가능</Nav.Link>
            }
       
            {loginStat === true ? <Nav.Link onClick={logoutHandler}>로그아웃 하기</Nav.Link> : <Nav.Link href='/login'>
                로그인하기
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;