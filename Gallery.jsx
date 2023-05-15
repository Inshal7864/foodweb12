import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from "../Assets/gallery1.jpg"
import image2 from "../Assets/gallery2.jpg"
import image3 from "../Assets/gallery3.jpg"

function Gallery() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Gallery</h1>
      <CardGroup style={{ marginTop: "30px" }}>
        <Card style={{ height: "230px" }}>
          <Card.Img variant="top" style={{ height: "270px" }}
            src={image1} />


        </Card>
        <Card style={{ height: "230px" }}>
          <Card.Img variant="top"
            style={{ height: "270px" }}

            src={image2} />


        </Card>
        <Card style={{ height: "230px" }}>
          <Card.Img variant="top"
            style={{ height: "270px" }}
            src={image3} />


        </Card>
      </CardGroup>

      <CardGroup style={{ marginTop: "8px" }}>
        <Card style={{ height: "230px" }}>
          <Card.Img variant="top" style={{ height: "270px" }}
            src={image1} />


        </Card>
        <Card style={{ height: "230px" }}>
          <Card.Img variant="top"
            style={{ height: "270px" }}

            src={image2} />


        </Card>
        <Card style={{ height: "280px" }}>
          <Card.Img variant="top"
            style={{ height: "270px" }}
            src={image3} />


        </Card>
      </CardGroup>
      <br />

  <br />

  <br />
    </>
  );
}
  



export default Gallery;

