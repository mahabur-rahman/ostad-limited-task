import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { resourceData } from "../../data/data";
import sitImg from "../../images/sitImg.png";
import clock from "../../images/clock.png";
import clk from "../../images/clk.png";
import video from "../../images/video_play.png";
import caldender from "../../images/calender.png";
import { FaArrowRight } from "react-icons/fa";

const ResourceCard = () => {
  const [data, setData] = useState(resourceData);

  return (
    <>
      {data.map((item) => {
        return (
          <Col xl={3} key={item.id} className="my-3">
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
          </Col>
        );
      })}
    </>
  );
};

export default ResourceCard;
