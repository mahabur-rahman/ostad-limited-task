import React, { Component } from "react";
import { Col, Image, Card, Button } from "react-bootstrap";
import { resourceData } from "../../data/data";
import sitImg from "../../images/sitImg.png";
import clock from "../../images/clock.png";
import clk from "../../images/clk.png";
import video from "../../images/video_play.png";
import caldender from "../../images/calender.png";
import { FaArrowRight, FaPlay, FaArrowLeft } from "react-icons/fa";
// slick
import Slider from "react-slick";
// fancy box for popup video
import Fancybox from "./fancyBox.js";

// const video = "https://www.youtube.com/watch?v=u6BOC7CDUTQ";

export default class ResourceCard extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {resourceData.map((item) => {
            return (
              <>
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="img-fluid"
                  />
                  <Fancybox>
                    <a
                      data-fancybox="gallery"
                      href={"https://www.youtube.com/watch?v=u6BOC7CDUTQ"}
                      className="play_btn yt_play_btn"
                    >
                      <FaPlay
                        style={{ color: "#FFC000" }}
                        className="play_icon"
                      />
                    </a>
                  </Fancybox>

                  <span className="label mt-2">Language Learning</span>
                  <Card.Body>
                    <h5 className="main_title">{item.title}</h5>
                    <h5 className="main_title mb-3">{item.subTitle}</h5>

                    <div className="cart_footer d-flex align-items-center justify-content-between">
                      <div className="rate d-flex align-items-center">
                        <Image src={clk} className="card_foot_img" />
                        <span className="card_label mx-2">60 min</span>
                      </div>

                      <div className="btn_desc d-flex align-items-center">
                        <Image src={caldender} className="card_foot_img" />
                        <span className="card_label mx-2">30 March, 2022</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </Slider>

        <div
          style={{
            textAlign: "end",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button className="prevBtn d-block d-sm-none" onClick={this.previous}>
            <FaArrowLeft className="prevIcon" />
          </button>
          <button
            className="nextBtn mx-3 d-block d-sm-none"
            onClick={this.next}
          >
            <FaArrowRight className="nextIcon" />
          </button>
        </div>
      </div>
    );
  }
}
