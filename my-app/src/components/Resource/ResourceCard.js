import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { resourceData } from "../../data/data";
import sitImg from "../../images/sitImg.png";
import clock from "../../images/clock.png";
import clk from "../../images/clk.png";
import video from "../../images/video_play.png";
import caldender from "../../images/calender.png";
import { FaArrowRight } from "react-icons/fa";
// slick
import Slider from "react-slick";

const ResourceCard = () => {
  const [data, setData] = useState(resourceData);

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
          slidesToShow: 3,
          slidesToScroll: 3,
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
              <Card>
                <Card.Img variant="top" src={item.img} className="img-fluid" />
                <Image src={video} alt="play" className="yt_play_btn" />

                <span className="label mt-2">Language Learning</span>
                <Card.Body>
                  <h5 className="main_title">{item.title}</h5>
                  <h5 className="main_title mb-3">{item.subTitle}</h5>

                  <div className="cart_footer d-flex align-items-center justify-content-between">
                    <div className="rate">
                      <Image src={clk} className="card_foot_img" />
                      <span className="card_label mx-2">60 min</span>
                    </div>

                    <div className="btn_desc">
                      <Image src={caldender} className="card_foot_img" />
                      <span className="card_label mx-2">30 March, 2022</span>
                    </div>
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

export default ResourceCard;
