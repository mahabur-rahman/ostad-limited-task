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
          <Col xl={6} lg={6}>
            <div className="banner_content">
              <Row>
                <Col xl={2}>
                  <Image src={computer} alt="computer" />
                </Col>
                <Col xl={9} className="mx-auto">
                  <div className="banner_text">
                    <h2 className="title mt-3 mt-xl-0">Tech and development</h2>
                    <p className="para my-4">
                      স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক
                      করুন নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা
                      ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।
                    </p>

                    <div className="banner_btn mt-4 mb-4">
                      <Button className="live_btn">
                        <Image src={book} alt="icon" />
                        <span className="mx-2 btn_text">৭টি লাইভ কোর্স</span>
                      </Button>

                      <Button className="live_btn mx-4">
                        <Image src={man} alt="icon" />
                        <span className="mx-2 btn_text">
                          ১৪২৪৫ জন Ostad গ্র্যাজুয়েট
                        </span>
                      </Button>
                    </div>

                    <div className="btn_link">
                      <Button className="start_btn">
                        <span className="link_text mx-2"> Start Learning</span>
                        <FaArrowRight />
                      </Button>

                      <Button className="start_btn_two mx-2">
                        <span className="link_text_Two">assessment</span>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
