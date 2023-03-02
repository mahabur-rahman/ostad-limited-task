import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { industry } from "../../data/data";
// slick
import Slider from "react-slick";

const IndustryCard = () => {
  const [data, setData] = useState(industry);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <>
      <Slider {...settings} style={{ margin: "0 1rem" }}>
        {data.map((item) => {
          return (
            <>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src={item.imgSrc}
                  className="img-fluid hr_main"
                />

                <Card.Body>
                  <h4 className="mb-0 mt-2 name">{item.name}</h4>
                  <p className="design">{item.designation}</p>

                  <div className="d-flex align-items-center justify-content-center">
                    <Image src={item.waltonImg} alt="comp" />
                    <Image src={item.misfitImg} alt="comp" className="mx-3" />
                    <Image src={item.waltonImg} alt="comp" />
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default IndustryCard;
