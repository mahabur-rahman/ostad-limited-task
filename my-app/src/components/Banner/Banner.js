import React from "react";
import "./banner.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import computer from "../../images/computer.png";
import book from "../../images/book.png";
import man from "../../images/man.png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="banner_content">
              <Image src={computer} alt="computer" />
              <div className="banner_text">
                <h2>Tech and development</h2>
                <p>
                  স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন
                  নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের
                  সাথে, ক্লিক করুন নিচের বাটনে।
                </p>
                <div className="banner_btn">
                  <Button>
                    <Image src={book} alt="icon" />
                    <span>৭টি লাইভ কোর্স</span>
                  </Button>
                  <Button>
                    <Image src={man} alt="icon" />
                    <span>১৪২৪৫ জন Ostad গ্র্যাজুয়েট</span>
                  </Button>
                </div>
                <div className="btn_link">
                  <Button>
                    <span> Start Learning</span>
                    <FaArrowRight />
                  </Button>
                  <Button>
                    <span>assessment</span>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
