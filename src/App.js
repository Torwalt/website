import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return <Header />;
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                WORK IN PROGRESS
              </a>
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#">
            My Site
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span class="navbar-toggler-icon" />
          </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <CVDropDown />
            </li>
            <li>
              <a
                className="nav-item"
                href="https://www.linkedin.com/in/alexander-dadiani-759023150/"
              ><img className="img-fluid" src={require("./linkedin.png")} width="40px" height="40px"></img>
              </a>
            </li>
            <li>
              <a
                className="nav-item"
                href="https://github.com/Torwalt"
              ><img className="img-fluid" src={require("./github.png")} width="40px" height="40px"></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

class CVDropDown extends Component {
  render() {
    return (
      <div className="dropdown">
        <button
          className="btn dropdown-toggle nav-items"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          CV
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            className="dropdown-item"
            href="/download/cv-german.pdf"
            download="cv-german.pdf"
          >
            German CV
          </a>
          <a
            className="dropdown-item"
            href="/download/CV English.pdf"
            download="cv-english.pdf"
          >
            English CV
          </a>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="text-center">
          <p>Hi, my name is Alex and welcome to my site!</p>
          <img src={require("./professional.jpg")} />
        </div>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return <div className="container" />;
  }
}

export default App;
