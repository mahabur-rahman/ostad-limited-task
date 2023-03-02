import React from "react";
import "./footer.scss";
import { Col, Container, Row, Image, Nav } from "react-bootstrap";
import playStore from "../../images/play_store.png";
import fbs from "../../images/fbs.png";
import ins from "../../images/ins.png";
import yt from "../../images/yt.png";
import lnk from "../../images/lnk.png";
import tiktok from "../../images/tiktok.png";
import footerLogo from "../../images/logo.png";
import phone from "../../images/phone.png";
import gmail from "../../images/gmail.png";
import map from "../../images/map.png";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col xl={3} lg={6} md={6}>
            <div className="img">
              {/* res add */}
              <div className="footer_logo mb-3">
                <Image src={footerLogo} alt="ostad" className="img-fluid" />
                <p className="res_text">
                  অনলাইন লাইভ স্কিল ডেভেলপমেন্ট <br /> প্ল্যাটফর্ম।
                </p>
                <h3 className="download_text">ডাউনলোড করুন ওস্তাদ অ্যাপ</h3>
              </div>

              <Image
                src={playStore}
                alt="playStore"
                className="img-fluid play_store"
              />
              <p className="footer_text mt-5 mb-2">
                কমিউনিটি -এর সাথে কানেক্টেড থাকতে
              </p>
              <div className="social_link d-flex align-items-center">
                <Nav.Link hre="#">
                  <Image src={fbs} alt="fb" className="links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={ins} alt="instagram" className="mx-3 links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={yt} alt="Youtube" className="links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={lnk} alt="Linkedin" className="mx-3 links" />
                </Nav.Link>

                <Nav.Link hre="#">
                  <Image src={tiktok} alt="tiktok" className="links" />
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6}>
            <div className="join_text">
              {/* res add */}
              <h3 className="quick_title mt-5">কুইক লিঙ্ক</h3>
              <Nav.Link hre="#" className="footer_text mb-3">
                আপকামিং লাইভ ব্যাচ
              </Nav.Link>
              <Nav.Link hre="#" className="footer_text mb-3">
                ফ্রি লাইভ ক্লাস
              </Nav.Link>
              <Nav.Link hre="#" className="footer_text mb-3">
                লাইভ ওয়ার্কশপ
              </Nav.Link>
              <div>
                <Nav.Link hre="#" className="footer_text mb-3">
                  জয়েন করুন এক্সপার্টদের টিমে
                </Nav.Link>
              </div>
              <div>
                <Nav.Link hre="#" className="footer_text">
                  ব্লগ
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6}>
            {/* res add  */}

            <h3 className="quick_title mt-5 mb-2">যোগাযোগ</h3>
            <div className="mb-3">
              <Image src={phone} alt="phone" />
              <span className="footer_text mx-3">01781-611903</span>
            </div>
            <div className="mb-3">
              <Image src={gmail} alt="gmail" />
              <span className="footer_text mx-3 py-5">support@ostad.app</span>
            </div>

            <div className="d-flex">
              <Image
                src={map}
                alt="map"
                className="img-fluid"
                style={{ objectFit: "contain" }}
              />
              <p className="mx-3">
                Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2,
                Dhaka-1212
              </p>
            </div>
          </Col>
          <Col xl={3} lg={6} md={6}>
            <h3 className="quick_title mt-5">কোম্পানি</h3>

            <Nav.Link hre="#" className="footer_text">
              আমাদের সম্পর্কে
            </Nav.Link>

            <Nav.Link hre="#" className="footer_text mt-2">
              Terms & Conditions
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
