import React, { Component, Fragment } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
// comp
import "./Free.css";
import "../Free/Free";
import Home from "../Home";
import AdopePhoto from "../../AllCourses/AdopePhote/AdopePhote";

// import images
import img1 from "./Freeimage/1.png";
import img2 from "./Freeimage/2.jpg";
import img3 from "./Freeimage/3.png";
import img4 from "./Freeimage/4.jpg";

export class Free extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          imgurl: img1,
          name: "basic adobe photoshop",
          view: "1250 ",
          type: "free ",
          more: "details",
        },
        {
          imgurl: img2,
          name: "html,css,bootstrap4",
          view: "1200 ",
          type: "free 1 month",
          more: "details",
        },
        {
          imgurl: img3,
          name: "marketing",
          view: "1050 ",
          type: "free",
          more: "details",
        },
        {
          imgurl: img4,
          name: "first step in flutter",
          view: "250 ",
          type: "free 2 weeks",
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
          name: "basic adobe photoshop",
          view: "1250 ",
          type: "free ",
          more: "details",
        },
        {
          imgurl: img2,
          name: "html,css,bootstrap4",
          view: "1200 ",
          type: "free 1 month",
          more: "details",
        },
        {
          imgurl: img3,
          name: "marketing",
          view: "1050 ",
          type: "free",
          more: "details",
        },
        {
          imgurl: img4,
          name: "first step in flutter",
          view: "250 ",
          type: "free 2 weeks",
          more: "details",
        },
      ],
    });
  };

  click2 = () => {
    this.setState({
      cards: [
        {
          imgurl: img3,
          name: "basic adobe photoshop",
          view: "1250 ",
          type: "free ",
          more: "details",
        },
        {
          imgurl: img4,
          name: "html,css,bootstrap4",
          view: "1200 ",
          type: "free",
          more: "details",
        },
        {
          imgurl: img2,
          name: "marketing",
          view: "1050 ",
          type: "free",
          more: "details",
        },
        {
          imgurl: img2,
          name: "first step in flutter",
          view: "250 ",
          type: "free",
          more: "details",
        },
      ],
    });
  };

  click3 = () => {
    this.setState({
      cards: [
        {
          imgurl: img4,
          name: "basic adobe photoshop",
          view: "1250 ",
          type: "free ",
          more: "details",
        },
        {
          imgurl: img1,
          name: "html,css,bootstrap4",
          view: "1200 ",
          type: "free 1 month",
          more: "details",
        },
        {
          imgurl: img2,
          name: "marketing",
          view: "1050 ",
          type: "free",
          more: "details",
        },
        {
          imgurl: img1,
          name: "first step in flutter",
          view: "250 ",
          type: "free 2 weeks",
          more: "details",
        },
      ],
    });
  };

  render() {
    const { cards } = this.state;
    const firstSwiper = cards.map((swiper, ind) => {
      return (
        <div className="cards" key={ind}>
          <div class="card">
            <img src={swiper.imgurl} class="card-img-top" alt={swiper.imgurl} />
            <div class="card-body">
              <h4 class="card-title">{swiper.name}</h4>
              <h6>
                <i className="bi bi-eye-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
                {swiper.view}
              </h6>
              <p class="card-text">{swiper.type}</p>

              <Link to="/AdopePhote">
                <button>{swiper.more}</button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <div>
          <section className="free">
            <div className="container">
              <div className="row">
                <h5>100% Free</h5>
                <h1>Start Learning with Free Courses</h1>
                <p>
                  Free online courses from the world's top universities and
                  companies.
                </p>
                <div className="carsoul">
                  <div className="Cards">{firstSwiper}</div>
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
     
        </div>
      </Fragment>
    );
  }
}

export default Free;

// key for adob from https://www.adobe.io/photoshop/api/signup/?ref=signup# is =Project 2021929155418
// API KEY=efbc78836cc34190a20a317afeb7cb5a
// /public key 908a588745cc11539bfd2624ccc4ce6dfa91fa57
    //  <Switch>
    //         <Route path="/" component={Home} exact />
    //         <Route path="/AdopePhoto" component={AdopePhoto} exact />
    //         {/* <Redirect from="/Home/" to="/AdopePhote/" exact /> */}
    //       </Switch>