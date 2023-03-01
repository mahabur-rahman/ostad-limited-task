import React from "react";
import "./guide.scss";
import { Container, Image, Row, Col } from "react-bootstrap";
import play from "../../images/play.png";
import book from "../../images/guide_book.png";
import GuideCard from "./GuideCard";

const Guide = () => {
  return (
    <>
      <section id="guide">
        <Container>
          <div className="title_part mb-4">
            <Image src={book} alt="book" />
            <h4 className="carier_title mx-3 mb-0 mt-2">
              এক্সপার্টদের ক্যারিয়ার গাইডলাইন
            </h4>
          </div>
          <Row>
            <GuideCard />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Guide;
