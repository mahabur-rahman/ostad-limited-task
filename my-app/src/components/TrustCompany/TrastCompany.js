import React from "react";
import "./trustCompany.scss";
import { Container, Image } from "react-bootstrap";
import trust1 from "../../images/trust1.jpg";
import trust2 from "../../images/trust2.jpg";
import trust3 from "../../images/trust3.jpg";
import trust4 from "../../images/trust4.jpg";

const TrastCompany = () => {
  return (
    <section id="trustCompany">
      <div className="content text-center">
        <h5 className="title mb-4">Top companies trust Ostad</h5>

        <div className="com_img">
          <Image src={trust4} alt="img" className="item" />
          <Image src={trust1} alt="img" className="item" />
          <Image src={trust2} alt="img" className="item" />
          <Image src={trust3} alt="img" className="item" />
          <Image src={trust2} alt="img" className="item" />
          <Image src={trust3} alt="img" className="item" />
          <Image src={trust4} alt="img" className="item" />
        </div>
      </div>
    </section>
  );
};

export default TrastCompany;
