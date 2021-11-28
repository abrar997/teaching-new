import React, { Component, Fragment } from "react";
import "./Undefined.css";
import Home from "../Home/Home";
import img from "./back.png";
import img1 from "./img1.jpg";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
export class Undefined extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <div className="ssshshh">
            <img src={img} />
          </div>
          <div className="container">
            <div className="row">
              <div className="gif">
                <div>
                  <img src={img1} />
                </div>
                <div className=" text">
                  <h1>OOPS ! this page not found</h1>
                  <p>
                    seems like you have lost your way. let's bring you back
                    <br />
                    <Link to="/Home">Home</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Switch>
              
            <Route path="/" component={Undefined} exact />
            <Route path="/Home" component={Home} exact />
          </Switch>
        </Fragment>
      </div>
    );
  }
}

export default Undefined;
