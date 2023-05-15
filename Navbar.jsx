import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdFastfood} from 'react-icons/md';


function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{margintop:"30px"}}>
      <Container>
        <h1 style={{color:"white"}}> <MdFastfood color='white' style={{marginBottom:"10px"}} /> Foodistan</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Service">Service</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <Nav.Link href="Gallery">Gallery</Nav.Link>

            
            
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu ;