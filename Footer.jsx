import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillFacebook,AiFillGithub , AiFillInstagram} from 'react-icons/ai';



function Footer() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{margintop:"30px"}}>
      <Container>
        <b style={{color:"white" , fontSize:"30px"}}>Foodistan    <AiFillFacebook color='white' /><AiFillGithub color='white'/><AiFillInstagram color='white'/></b>
    
      </Container>
    </Navbar>
  );
}

export default Footer ;