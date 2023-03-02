import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { guideData } from "../../data/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// slick
import Slider from "react-slick";

const GuideCard = () => {
  const [data, setData] = useState(guideData);

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
          slidesToShow: 1,
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
          // initialSlide: 2,
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
              {/* <Col xl={3} key={item.id}> */}
              <Card>
                <Card.Img
                  variant="top"
                  src={item.imgSrc}
                  className="img-fluid"
                />
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <span className="icon">{item.btn}</span>
                    <Card.Title className="main_title mx-2 mb-0 mt-1">
                      {item.mainTitle}
                    </Card.Title>
                  </div>
                  <hr style={{ color: "#fff" }} />
                  <div className="d-flex align-align-items-center">
                    <Image
                      src={item.userImg}
                      alt="user"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="design mx-3">
                      <h5 className="mb-0 sub_title_des">{item.subTitle}</h5>
                      <p className="mb-0 sub_label">{item.designation}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* </Col> */}
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default GuideCard;
