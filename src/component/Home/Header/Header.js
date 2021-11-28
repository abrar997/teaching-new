import React, { Component } from "react";
// comp
import "./Header.css";
// img
import img1 from "./Headerimg/backleft.jpg";
import img2 from './Headerimg/1.png'

export class Header extends Component {
  render() {
    return (
      <header className="headers">
        <div className="imglef">
          <img src={img1} />
        </div>

        <div className="container">
          <div className="row">
            <div
              className="text col-lg-6"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1>Learn Without Limits</h1>
              <p>
                Build skills with courses, certificates, and degrees online from
                world-class universities and companies.
              </p>
            </div>
            <div className="image col-lg-4">
              <img src={img2} />
            </div>
            <div className="buttons">
              <button className="btn" type="button">
                join for free for one month
              </button>
              <button className="btn" type="button">
                try code/mu. for bussines courses{" "}
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
