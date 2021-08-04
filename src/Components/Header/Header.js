import React from 'react'
import { Navbar,Form,Button,NavDropdown,Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <div className="fixed">
          
       <Navbar  className="dark"  > 
  <div className="col-md-7">
  <Navbar.Brand href="#">{<img
          alt=""
          src="/logo.png"
          width="140"
          height="50"
          className="logo" />} 
                </Navbar.Brand>
        </div>
        <div className="col-md-4">
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}  
      navbarScroll> 
          </Nav> 
          <Form className="d-flex">
          <h1  className="navbarrq">ACCÈS ILLIMITÉ AUX FILMS ET SÉRIES TV </h1>
      <Button  className="boutonred" variant="danger">ABBONEZ-VOUS</Button>
      <Button  variant="outline-light">S'IDENTIFIER</Button>
      <NavDropdown  title="films" id="films">
       <NavDropdown.Item  href="#AddCard">Ajou/film</NavDropdown.Item>
        <NavDropdown.Item  href="#Chercher">Chercher</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  href="#Abbonez">Abbonez</NavDropdown.Item>
      </NavDropdown>
    </Form>
      </Navbar.Collapse>
  </div>
</Navbar>
        </div>
      

      




    )
}

export default Header
