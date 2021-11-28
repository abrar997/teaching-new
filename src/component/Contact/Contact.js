import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";
// comp
import Footer from "../Footer/Footer";
import img1 from "./backleft.jpg";
import img from "./back.jpg";

export class Contact extends Component {
  state = {
    Name: "",
    email: "",
    person: "",
    phoneNumber: "",
    note: "",
  };

  // name =NAme,date,time....etc = value enter inside input
  // event something ready in addEventlistner to take name from inputs name=any value isnide in inputs
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value, //array group of information from different people saved in []
    });
  };

  submitInfo = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    const { Name, email, person, phoneNumber, note } = this.state;
    return (
      <div>
        <section className="formaa">
          <img src={img} />
          <div className="container">
            <div className="row">
              <h1>send your question and we will answer during 24h</h1>
              <form onSubmit={this.submitInfo} className="col-lg-6">
                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="Name"
                      onChange={this.changeHandler}
                      value={Name}
                    />
                  </div>
                  <div className="form-group col-md-5 ">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control left"
                      id="inputEmail4"
                      name="email"
                      onChange={this.changeHandler}
                      value={email}
                    />
                  </div>

                  <br />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4 mt-4  option">
                    <label htmlFor="inputState">type</label>
                    <select
                      id="inputState"
                      className="form-control"
                      name="person"
                      onChange={this.changeHandler}
                      value={person}
                    >
                      <option defaultValue> type of services </option>
                      <option>courses</option>
                      <option>find a job </option>
                      <option>asking question?</option>
                    </select>
                  </div>
                  <div
                    className="form-group col-md-3 mt-4 mb-1 "
                    style={{ marginRight: "70px" }}
                  >
                    <label htmlFor="inputEmail4">phone number </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputEmail4"
                      name="phoneNumber"
                      onChange={this.changeHandler}
                      value={phoneNumber}
                    />
                  </div>
                </div>

                <div className="note col-md-12 ">
                  <label htmlFor="inputnote">your question ?</label>
                  <input
                    type="tetx"
                    className="form-control left"
                    id="inputnote"
                    name="note"
                    onChange={this.changeHandler}
                    value={note}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
              <div className="image col-lg-4">
                <img src={img1} />\
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
export default Contact;
