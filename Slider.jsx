import Carousel from 'react-bootstrap/Carousel';
import image1 from "../Assets/Good_Food_Display_-_NCI_Visuals_Online.jpg"
import image2 from "../Assets/flat-lay-batch-cooking-composition_23-2148765597.avif"
import image3 from "../Assets/pexels-ella-olsson-1640777.jpg"
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img height={600+'px'}
        style={{ width:"100%"}}
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={600+'px'}
        style={{ width:"100%"}}
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={600+'px'}
        style={{ width:"100%"}}
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;