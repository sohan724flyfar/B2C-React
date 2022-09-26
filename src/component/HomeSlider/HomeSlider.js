import React from "react";
import image1 from "../../image/SliderImg/s1.png";
import image2 from "../../image/SliderImg/s2.png";
import image3 from "../../image/SliderImg/s3.png";
import image4 from "../../image/SliderImg/s4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../HomeComponent/HomeComponent.css";
import { Box } from "@mui/system";

const HomeSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box>
      <Slider {...settings}>
        <div
          style={{
            width: "600px",
            height: "400px",
          }}
        >
          <a
            href="https://www.facebook.com/FlyFarInternational/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={image1}
              alt="img-loading"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </a>
        </div>
        <div
          style={{
            width: "600px",
            height: "400px",
          }}
        >
          <a
            href="https://www.facebook.com/FlyFarInternational/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={image2}
              alt="img-loading"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </a>
        </div>
        <div
          style={{
            width: "600px",
            height: "400px",
          }}
        >
          <a
            href="https://www.facebook.com/FlyFarInternational/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={image3}
              alt="img-loading"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </a>
        </div>
        <Box
          style={{
            width: "600px",
            height: "400px",
          }}
        >
          <a
            href="https://www.facebook.com/FlyFarInternational/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={image4}
              alt="img-loading"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </a>
        </Box>
      </Slider>
    </Box>
  );
};

export default HomeSlider;
