import React, { Component } from "react";
import axios from "axios";
import "./Weeks.css";

export class Weeks extends Component {
  state = {
    problem: [],
    display: false,
  };

  componentDidMount() {
    axios.get("course.json").then((res) => {
      this.setState({
        problem: res.data.problemss,
      });
      console.log(res.data.problemss);
    });
  }

  handledelete = () => {
    this.setState({ display: !this.state.display });
  };
  render() {
    const x = this.state.display;
    const { problem } = this.state;
    const list = problem.map((one) => {
      return (
        <div key={one.id}>
          <div className="week">
            <h3>{one.courseNum} </h3>
          </div>
          <div className="text">
            <h2>{one.name} </h2>

            <h5>{one.time}</h5>

            <h4>
              <i className="bi bi-book"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-book"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              {one.contain}
              <button onClick={this.handledelete} className="xxxx">
                <i className="bi bi-camera-video-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-camera-video-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                  />
                </svg>
              </button>
              {/* firstly not work bcz && run first false and i write wrong condition so it is not run  (this.state.problem(false) ),(this.state.dispaly (true)) */}
              {x && (
                <div className="vide">
                  <video controls autoPlay />
                  <source src={one.video} />
                </div>
              )}
            </h4>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="probl">
          <div className="container">
            <div className="row">
              <h1>What you will learn from this course ? </h1>

              <div className="listlesson">{list}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weeks;
