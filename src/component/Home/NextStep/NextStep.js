import React, { Component } from 'react'
import "./NextStep.css";
// img
import img2  from './NextStepimage/1.webp'
export class NextStep extends Component {
    render() {
        return (
          <div>
            <section className="next">
              <div className="container">
                <div className="row">
                  <div className="tootoot">
                    <div className="img col-lg-6">
                      <img src={img2} />
                    </div>
                    <div
                      className="text"
                      className="text col-lg-6"
                      data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <h1>
                        Take the next step toward your personal and professional
                        goals with Coursera.
                      </h1>
                      <p>
                        Join now to receive personalized recommendations from
                        the full Coursera catalog.
                      </p>
                      <a>
                        
                        <div className="btn">join now </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default NextStep
