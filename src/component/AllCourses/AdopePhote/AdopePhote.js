import React, { Component } from "react";
import "./AdopePhote.css";
import vid1 from "./AdobeImage&video/intro.mp4";
import Week1 from "./Week1/Week1";
import Footer from '../../Footer/Footer'
import img from './AdobeImage&video/1.png'
export class AdopePhote extends Component {
state={
  intro:" The Adobe Suite makes digital design possible for everyone,from marketing professionals to three-dimensional artists.",
}

history=()=>{
  this.setState({
    intro:
"Photoshop was created in 1988 by brothers Thomas and John Knoll. The software was originally developed in 1987 by the Knoll brothers, and then was sold to Adobe Systems Inc. in 1988.The program started as a simple solution for displaying grayscale images on monochrome displays. After some encouragement from John, the brothers both took a break from work and school to build a full image editing program."  });
}
  render() {


    return (
      <div>
        <section className="Adobe">
          <img src={img} />
          <div className="container">
            <div className="row">
              <h1>Adobe photoshop </h1>

              <div className="content">
                <div className="col-lg-4">
                  <video  autoPlay muted>
                    <source src={vid1} />
                  </video>
                </div>
                <div className="col-lg-6 text">
                  <h3>Inroduction about Adobe Photoshop </h3>
                  <p>
                    {this.state.intro}
                  </p>

                  <button type="button" className="btn" onClick={this.history} >history </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Week1 />
        <Footer />
      </div>
    );
  }
}

export default AdopePhote;
