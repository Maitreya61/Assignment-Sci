import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React from "react";

const mentors = [
  {
    id: 1,
    image: "pngegg.png",
    name:"Shubam",
    college: "Cambridge University, UK"
  },
  {
    id: 2,
    image: "pngegg.png",
    name:"Aarav Gupta",
    college: "Indian Institute of Technology (IIT) Bombay"
  },
  {
    id: 3,
    image: "woman.png",
    name:"Priya Sharma",
    college:'Delhi University'
  },
  {
    id: 4,
    image: "pngegg.png",
    name:"Rajesh Patel",
    college:'Jawaharlal Nehru University (JNU)'
  },
  {
    id: 5,
    image: "woman.png",
    name:"Sanya Reddy",
    college:'University of Hyderabad'
  },
  {
    id: 6,
    image: "pngegg.png",
    name:"Vikram Singhania",
    college:'Banaras Hindu University (BHU)'
  },
];

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#781EB0",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const SliderComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div>
      <Slider {...settings}>
        {mentors.map((mentor) => {
          return (
            <div key={mentor.id} className="mentor">
              <img src={mentor.image} alt="mentor" />
              <div className="mentor-details">
                <h4>{mentor.name}</h4>
                <p>{mentor.college}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
