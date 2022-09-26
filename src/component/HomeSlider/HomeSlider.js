import React from "react";
import Slider from "react-slick";
import c1 from "../../image/companylogo/c1.png";
import c2 from "../../image/companylogo/c2.png";
import c3 from "../../image/companylogo/c3.png";
import c4 from "../../image/companylogo/c4.png";
import "../HomeComponent/HomeComponent.css";

const HomeSlider = () => {
  var settings = {
    // dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //   dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={c1} alt="img-lodding" />
        </div>
        <div>
          <img src={c2} alt="img-lodding" />
        </div>
        <div>
          <img src={c1} alt="img-lodding" />
        </div>
        <div>
          <img src={c3} alt="img-lodding" />
        </div>
        <div>
          <img src={c4} alt="img-lodding" />
        </div>
        <div className="company-logo-width">
          <img src={c3} alt="img-lodding" />
        </div>
        <div className="company-logo-width">
          <img src={c4} alt="img-lodding" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
