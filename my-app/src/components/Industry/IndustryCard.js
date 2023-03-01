import React, { useState } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { industry } from "../../data/data";

const IndustryCard = () => {
  const [data, setData] = useState(industry);

  return (
    <>
      {data.map((item) => {
        return (
          <Col xl={3} key={item.id} className="my-3">
            <Card className="text-center">
              <Card.Img variant="top" src={item.imgSrc} className="img-fluid" />

              <Card.Body>
                <h4 className="mb-0 mt-2 name">{item.name}</h4>
                <p className="design">{item.designation}</p>
                <Image src={item.waltonImg} alt="comp" />
                <Image src={item.misfitImg} alt="comp" className="mx-3" />
                <Image src={item.waltonImg} alt="comp" />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default IndustryCard;
