import React from "react";
import "./footer.scss";
import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import playStore from "../../images/play_store.png";
import fbs from "../../images/fbs.png";
import ins from "../../images/ins.png";
import yt from "../../images/yt.png";
import lnk from "../../images/lnk.png";
import tiktok from "../../images/tiktok.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xl={3}>
            <div className="img">
              <Image src={playStore} alt="playStore" />
              <p>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
              <div className="social_link d-flex align-items-center">
                <Nav.Link hre="#">
                  <Image src={fbs} alt="fb" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={ins} alt="instagram" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={yt} alt="Youtube" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={lnk} alt="Linkedin" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={tiktok} alt="tiktok" />
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col xl={3}>
            <div className="join_text">
              <div>
                <Nav.Link hre="#">জয়েন করুন এক্সপার্টদের টিমে</Nav.Link>
              </div>
              <div>
                <Nav.Link hre="#">ব্লগ</Nav.Link>
              </div>
            </div>
          </Col>
          <Col xl={3}>
            <p>
              Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, <br /> Gulshan-2,
              Dhaka-1212
            </p>
          </Col>
          <Col xl={3}>
            <Nav.Link hre="#">Terms & Conditions</Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
