import React, { Component } from "react";
// comp
import "./Company.css";
// img
import img1 from "./Companyimage/1.png";
import img2 from "./Companyimage/2.png";
import img3 from "./Companyimage/3.png";
import img4 from "./Companyimage/4.jpg";
import img5 from "./Companyimage/5.png";
import img6 from "./Companyimage/6.png";
import img7 from "./Companyimage/7.png";
import img8 from "./Companyimage/8.png";

export class Company extends Component {
  render() {
    return (
      <section className="company">
        <div className="container">
          <div className="row">
            <h1>
              We collaborate with
              <span> 200+ leading universities and companies</span>
            </h1>
            <div className="iamges">
              <img src={img1} />

              <img src={img2} />

              <img src={img3} />

              <img src={img4} />

              <img src={img5} />

              <img src={img6} />

              <img src={img7} />

              <img src={img8} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Company;
