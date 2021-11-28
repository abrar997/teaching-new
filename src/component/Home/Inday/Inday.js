import React, { Component, Fragment } from "react";
import { Switch } from "react-router";
import { Route } from "react-router";
// comp
import ProblemDay from "../../AllCourses/ProblemDay/ProblemDay";
import "./Inday.css";
import Home from "../Home";

// img
import img1 from "./Indayimage/3.jpg";
import img2 from "./Indayimage/4.jpg";
import img3 from "./Indayimage/5.jpg";
import img4 from "./Indayimage/6.jpg";
import img5 from "./Indayimage/phone.png";
import { Link } from "react-router-dom";

export class Inday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          imgurl: img1,
          name: "basic of problem solving",
          view: "1250 ",
          oldprice: "$50 ",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img2,
          name: "basic of problem solving",
          view: "1200 ",
          oldprice: "90$",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img3,
          name: "basic of problem solving",
          view: "1050 ",
          oldprice: "60$",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img4,
          name: "basic of problem solving",
          view: "250",
          oldprice: "40&",
          newPrice: "$90",
          more: "details",
        },
      ],
    };
  }

  click1 = () => {
    this.setState({
      cards: [
        {
          imgurl: img1,
          name: "basic of problem solving",
          view: "1250 ",
          oldprice: "90$ ",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img2,
          name: "basic of problem solving",
          view: "1200 ",
          oldprice: "90$",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img3,
          name: "basic of problem solving",
          view: "1050 ",
          oldprice: "90$",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img4,
          name: "basic of problem solving",
          view: "250",
          oldprice: "90$",
          newPrice: "$90",
          more: "details",
        },
      ],
    });
  };

  click2 = () => {
    this.setState({
      cards: [
        {
          imgurl: img5,
          name: "basic of problem solving",
          view: "1250 ",
          oldprice: "90&",
          newPrice: "$40",
          more: "details",
        },
        {
          imgurl: img3,
          name: "basic of problem solving",
          view: "1200 ",
          oldprice: "50$",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img2,
          name: "basic of problem solving",
          view: "1050 ",
          oldprice: "50$ ",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img1,
          name: "basic of problem solving",
          view: "250 ",
          oldprice: "90$ ",
          newPrice: "$90",
          more: "details",
        },
      ],
    });
  };

  click3 = () => {
    this.setState({
      cards: [
        {
          imgurl: img3,
          name: "basic of problem solving",
          view: "1250 ",
          oldprice: "50$ ",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img4,
          name: "basic of problem solving",
          view: "1200 ",
          oldprice: "free ",
          newPrice: "",
          more: "details",
        },
        {
          imgurl: img5,
          name: "basic of problem solving",
          view: "1050 ",
          oldprice: "free ",
          newPrice: "$90",
          more: "details",
        },
        {
          imgurl: img2,
          name: "basic of problem solving",
          view: "250 ",
          oldprice: "50$ ",
          newPrice: "$90",
          more: "details",
        },
      ],
    });
  };

  render() {
    const x = this.state.dispaly;

    const { cards } = this.state;
    const data = cards.map((card, ind) => {
      return (
        <div className="card" key={ind}>
          <div>
            <img src={card.imgurl} />
            <div className="text">
              <h3>{card.name} </h3>
              <h4>
                <i className="bi bi-eye-fill pr-3 "></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill pr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
                {card.view}
              </h4>
              <h5>
                <span>{card.oldprice} </span>
                <span>
                  <del>{card.newPrice} </del>
                </span>
              </h5>
              <Link to="/ProblemDay">
                <button className="btn"> {card.more} </button>
              </Link>
            </div>
          </div>
        </div>
      );
    });

    // { imgurl: img1, name: "first step in flutter", view: "250 ", oldprice: "free ",more:"details" },

    return (
      <div>
        <Fragment>
          <section className="inday">
            <div className="container">
              <div className="row">
                <span>Courses and Specializations</span>
                <h1>Courses You Can Complete in a Day</h1>
                <p>
                  Over 4,000 courses in topics like business analytics, graphic
                  design, Python, and more.
                </p>
                <div className="carou">
                  <div className="cards">{data}</div>

                  <div className="buttons">
                    <button onClick={this.click1}>
                      <i className="bi bi-laptop"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-laptop"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                      </svg>
                    </button>
                    <button onClick={this.click2}>
                      <i className="bi bi-laptop"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-laptop"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                      </svg>
                    </button>
                    <button onClick={this.click3}>
                      <i className="bi bi-laptop"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-laptop"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
        </Fragment>
      </div>
    );
  }
}

export default Inday;
//    <Switch>
            // <Route path="/" component={Inday} exact />

            // <Route path="/ProblemDay" component={ProblemDay} exact />
          // </Switch>