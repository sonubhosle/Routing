import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Style.css";

const slides = [
  {
    id: "1",
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f09f551230626a04.jpg?q=20",
  },
  {
    id: "2",
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/345037032e3daaaf.jpg?q=20",
  },
  {
    id: "3",
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/17a2c4ed00866b1a.jpg?q=20",
  },
];


const Slider = () => {
  return (
  <Carousel className="slider" infiniteLoop swipeable>
      {
        slides.map((item,indx) => <img key={indx} src={item.img} /> )
      }
  </Carousel>
  )
};

export default Slider;
