import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <body>
        <div className="content">
          <nav>
            <div className="nav1" style={{ lineHeight: "1rem" }}>
              <h1
                style={{
                  letterSpacing: "1px",
                  fontSize: "large",
                  marginLeft: "20px",
                }}
              >
                Goodpoints
              </h1>
              <h6>&nbsp;&nbsp;Incentivising goodness</h6>
            </div>
            <div className="nav2" style={{ float: "right" }}>
              <ul>
                <li>
                  <img
                    src={require("../images/icon-facebook.svg")}
                    alt="fbLogo"
                  ></img>
                </li>
                <li>
                  <img
                    src={require("../images/icon-instagram.svg")}
                    alt="fbLogo"
                  ></img>
                </li>
                <li>
                  <img
                    src={require("../images/icon-twitter.svg")}
                    alt="fbLogo"
                  ></img>
                </li>
                <li>
                  <img
                    src={require("../images/icon-youtube.svg")}
                    alt="fbLogo"
                  ></img>
                </li>
              </ul>
            </div>
          </nav>
          <br></br>
          <br></br>
          <br></br>

          <div className="center">
            <div className="quote">
              <h2>
                <b>Do Something good today</b>
              </h2>
              <p className="flow-text grey-text text-darken-1">
                And checkout so much you can do with your goodpoints
              </p>
              <br />
            </div>

            <div className="links">
              <ul id="linkbtn">
                <li>
                  <Link
                    to="/register"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                    }}
                    className="btn"
                  >
                    Register
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>
                  <Link
                    to="/login"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                    }}
                    className="btn"
                  >
                    Log In
                  </Link>
                </li>
              </ul>

              <h1 style={{ textAlign: "center", marginTop: "15px" }}>OR</h1>
              <div
                className="skipbtn"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <Link
                  to="/working"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                  }}
                  className="btn"
                >
                  <span>Skip and Browse </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Landing;
