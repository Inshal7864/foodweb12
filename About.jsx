import Card from 'react-bootstrap/Card';
import image1 from "../Assets/about1.jpg"
import Figure from 'react-bootstrap/Figure';


function About() {
  return (
    <>
   <h1 style={{textAlign:"center" , marginTop:"30px"}}>About us</h1>


    <Figure>
      <Figure.Image
        // alt="200x200"
        style={{height:"100%", width:"100%"}}
        src={image1}
      />
      <Figure.Caption style={{fontSize:"20px"}}>
      A food website is a website that provides information, resources, and content related to food. This can include recipes, cooking tips, food news, restaurant reviews, and food-related articles. The purpose of a food website is to help people learn about, appreciate, and enjoy food in all its forms. Food websites can range from simple blogs to comprehensive online resources that provide information on all aspects of food, from cooking techniques to food safety. Many food websites also provide community features, such as forums or social media groups, where users can connect with others who share their passion for food. Overall, the goal of a food website is to educate, inspire, and entertain people who are interested in food and cooking.
      </Figure.Caption>
    </Figure>
  

   
    </>
  );
}

export default About;