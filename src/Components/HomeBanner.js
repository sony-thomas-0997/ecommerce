import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./HomeBanner.css"
 
function HomeBanner() {
  const [index, setIndex] = useState(0);

 
  return (
    <>
    <div className="banner-div">
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="image-banner"
            src={require(`../images/HomeBanner/13.jpeg`)}
            alt="can't load"
          />
          <Carousel.Caption className="caption-style-banner">
            <h3>Best Offers Waiting For You</h3>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="image-banner"
            src={require(`../images/HomeBanner/1.jpg`)}
            alt="can't load"
          />
          <Carousel.Caption className="caption-style-banner">
            <h3>Flat 20% discount on shopping over Rs.20000</h3>
 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    </div>

    </>
  );
}

export default HomeBanner;
