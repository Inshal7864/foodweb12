import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';
// import {Container} from 'react-bootstrap/Container';
// import image1 
import Container from 'react-bootstrap/Container';
import image1 from "../Assets/image.jpg"
import image20 from "../Assets/image20.jpg"
import image13 from "../Assets/image13.jpg"
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import image1 from"../Assets/image.jpg"



function Service  () {
  return (
    <>
    

    <h2 style={{textAlign:"center" , marginTop:"10px"}}>Our Sevice</h2>
        <CardGroup style={{marginTop:"50px"}}>
      <Card style={{height:"400px"}}>
        <Card.Img variant="top" style={{height:"270px"}}
         src={image13}/>
        <Card.Body>
          <Card.Title>Chicken Pasta </Card.Title>
          <br/>
          

          <button>Order Now</button>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
       
      </Card>
      <Card style={{height:"400px"}}>
        <Card.Img variant="top"
                style={{height:"270px"}}

        src={image1} />
        <Card.Body>
          <Card.Title>Chicken Biryani</Card.Title>
          <br/>
          <button>Order Now</button>
          
        </Card.Body>
        
      </Card>
      <Card style={{height:"400px"}}>
        <Card.Img variant="top" 
        style={{height:"270px"}}
        src={image20} />
        <Card.Body>
          <Card.Title>Mutton Karahi</Card.Title>
         <br />
         <button>Order Now</button>
        </Card.Body>
        
      </Card>
    </CardGroup>
    </>
  );
}

export default Service;