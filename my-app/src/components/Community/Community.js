import React from "react";
import "./community.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import communityImg from "../../images/community.png";
import CommunityCard from "./CommuniyCard";

const Community = () => {
  return (
    <section id="community">
      <Container>
        <div className="main_title d-flex align-align-items-center mb-3 pb-1">
          <Image src={communityImg} alt="community" />
          <h3 className="mb-0 course_title mt-2 mx-3">
            জয়েন করুন আমাদের কমিউনিটিতে
          </h3>
        </div>
        <p
          className="mb-4"
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
          <CommunityCard />
        </Row>
      </Container>
    </section>
  );
};

export default Community;
