import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img
          className="logo"
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            marginRight: '15px',
          }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Ko2MIOzzDlWu8a_1Xo8UAQHaEK%26pid%3DApi&f=1&ipt=39fe54421b15a8ebacdc63f392676bdcec4b64b82b53894051e66cbcc51493cb&ipo=images"
          alt="netflixImage"
        />

        <Navbar.Brand href="/" style={{ fontWeight: 'bolder' }}>
          Netflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorite">Favorite List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
