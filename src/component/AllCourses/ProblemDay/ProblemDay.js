import React, { Component } from "react";
import Footer from "../../Footer/Footer";
import "./ProblemDay.css";
import vivi from "./ProblemDayimage/video.mp4";
import img from "./ProblemDayimage/back.png";
import Weeks from "./Weeks/Weeks";
export class ProblemDay extends Component {
  state = {
    intro:
      "Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.",
  };

  render() {
    return (
      <div>
        <section className="problem">
          <img src={img} />
          <div className="cont">
            <div className="container">
              <div className="row">
                <div className="content">
                  <div className="col-lg-4">
                    <video autoPlay muted controls>
                      <source src={vivi} />
                    </video>
                  </div>
                  <div className="col-lg-6 text">
                    <h3>
                      Inroduction about Problem Solving Using Computational
                      Thinking
                    </h3>
                    <p>{this.state.intro}</p>

                    <button
                      type="button"
                      className="btn"
                      onClick={() => {
                        this.setState({
                          intro:
                            "Problem-solving strategies are the steps that one would use to find the problems that are in the way to getting to one's own goal. Some refer to this as the problem-solving cycle.",
                        });
                      }}
                    >
                      problem solving strategies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Weeks />
        <Footer />
      </div>
    );
  }
}

export default ProblemDay;
