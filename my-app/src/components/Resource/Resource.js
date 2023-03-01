import React from "react";
import "./resource.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import resrc from "../../images/resrc.png";
import ResourceCard from "./ResourceCard";

const Resource = () => {
  return (
    <section id="resource">
      <Container>
        <div className="main_title d-flex align-align-items-center mb-3 pb-1">
          <Image src={resrc} alt="sound" className="video_img img-fluid" />
          <h3 className="mb-0 course_title mt-2 mx-3">ফ্রি ভিডিও রিসোর্স</h3>
        </div>
        <p
          style={{
            color: "#1D2939",
            fontWeight: "400",
            fontSize: "1rem",
          }}
        >
          স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
          বাটনে।
        </p>

        <Row>
          <ResourceCard />
        </Row>
      </Container>
    </section>
  );
};

export default Resource;
