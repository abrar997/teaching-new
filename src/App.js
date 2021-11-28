import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router';
import { HashRouter as Router , Link } from 'react-router-dom';
// img

// comp
import "./App.css";
import AdopePhote from './component/AllCourses/AdopePhote/AdopePhote';
import ProblemDay from './component/AllCourses/ProblemDay/ProblemDay';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home'
import Undefined from './component/Undefined/Undefined';
// import New from './component/New/New';



export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  code/<span> Mu.</span>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="what do you want to learn ?"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    <i className="bi bi-search"></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </form>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/Home"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a>
                            <Link to="/" className="dropdown-item">
                              courses
                            </Link>
                          </a>
                        </li>
                        <li>
                          <a>
                            <Link to="/" className="dropdown-item">
                              job
                            </Link>
                          </a>
                        </li>
                        <li></li>
                        <li>
                          <a>
                            <Link className="dropdown-item" to="/">
                              question/Answer
                            </Link>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item pl-4"
                      style={{ marginLeft: "10px" }}
                    >
                      <Link className="nav-link ml-4" to="/Contact">
                        contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Home" component={Home} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/AdopePhote" component={AdopePhote} exact />
          <Route path="/ProblemDay" component={ProblemDay} exact />
          <Route path="/ProblemDay" component={ProblemDay} />
        <Route path="/AdopePhoto" component={AdopePhote}  />
          <Route component={Undefined} exact />
        </Switch>
      </Router>
    );}}

export default App
