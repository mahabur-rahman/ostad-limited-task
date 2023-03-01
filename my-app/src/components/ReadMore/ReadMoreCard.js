import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { readMore } from "../../data/data";

import clk from "../../images/clk.png";
import video from "../../images/video_play.png";
import caldender from "../../images/calender.png";

const ReadMoreCard = () => {
  const [data, setData] = useState(readMore);

  return (
    <>
      {data.map((item) => {
        return (
          <Col xl={4} key={item.id} className="my-3">
            <Card>
              <Card.Img variant="top" src={item.imgSrc} className="img-fluid" />

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
      })}
    </>
  );
};

export default ReadMoreCard;
