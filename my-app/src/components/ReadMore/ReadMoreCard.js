import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { readMore } from "../../data/data";

// slick
import Slider from "react-slick";

const ReadMoreCard = () => {
  const [data, setData] = useState(readMore);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <>
              <Card>
                <Card.Img
                  variant="top"
                  src={item.imgSrc}
                  className="img-fluid readMore_img"
                />

                <div className="d-flex align-items-center mt-2">
                  <span className="label">{item.date} </span>
                  <span
                    className="mx-2"
                    style={{
                      height: "5px",
                      width: "5px",
                      borderRadius: "50%",
                      background: "#475467",
                    }}
                  ></span>
                  <span className="label">{item.text}</span>
                </div>
                <Card.Body>
                  <h3 className="main_title mb-4">{item.title}</h3>
                  <span className="subTitle">{item.subTitle}</span>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </Slider>

      {/* {data.map((item) => {
        return (
          <Col xl={4} key={item.id} className="my-3">
            <Card>
              <Card.Img
                variant="top"
                src={item.imgSrc}
                className="img-fluid readMore_img"
              />

              <div className="d-flex align-items-center mt-2">
                <span className="label">{item.date} </span>
                <span
                  className="mx-2"
                  style={{
                    height: "5px",
                    width: "5px",
                    borderRadius: "50%",
                    background: "#475467",
                  }}
                ></span>
                <span className="label">{item.text}</span>
              </div>
              <Card.Body>
                <h3 className="main_title mb-4">{item.title}</h3>
                <span className="subTitle">{item.subTitle}</span>
              </Card.Body>
            </Card>
          </Col>
        );
      })} */}
    </>
  );
};

export default ReadMoreCard;
