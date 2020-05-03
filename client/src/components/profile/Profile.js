import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { isAutheticated } from "../auth/helper/index";

class Profile extends Component {
  render() {
    const {
      user: { name },
    } = isAutheticated();
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
            <br></br>
            <br></br>
          </nav>

          <div
            className="left"
            style={{ float: "left", width: "20%", marginLeft: "20px" }}
          >
            <div className="profile">
              <div
                id="blockp"
                style={{
                  border: "1px solid black",
                  backgroundColor: "coral",
                }}
              >
                <svg
                  height="80"
                  width="80"
                  style={{
                    marginLeft: "30%",
                    marginTop: "20px",
                  }}
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="30"
                    stroke="black"
                    strokeWidth="1"
                    fill="red"
                  />
                  Sorry, your browser does not support inline SVG.
                </svg>
                <span
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginLeft: "18%",
                  }}
                >
                  <b>{name}</b>
                </span>
              </div>

              <div className="blockp1">
                <h3>Causes you care</h3>
                <ul>
                  <li>
                    <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                      Environment
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                      Education
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                      Children
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                      Poverty
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right" style={{ float: "right", width: "70%" }}>
            <div className="points">
              <div className="blocke">
                <p>Goodpoints earned</p>
                <span>{this.props.pntsEarned}</span>
              </div>
              <div className="blockr">
                <p>Goodpoints redeemed</p>
                <span>{this.props.pntsRedeemed}</span>
              </div>
            </div>

            <div className="quote">
              <p>Continue sharing your goodness stories</p>
            </div>
            <main>
              <div
                className="main1"
                style={{
                  float: "left",
                  marginLeft: "10%",
                  marginRight: "20px",
                  width: "40%",
                }}
              >
                <h1>HOME</h1>
                <ul>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Maintained social distance
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Donated to relief fund
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Tipped delivery person
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Volunteered online and helped
                    </button>
                  </li>
                </ul>
              </div>

              <div
                className="main2"
                style={{
                  float: "right",
                  marginRight: "5%",
                  width: "40%",
                  marginTop: "10px",
                }}
              >
                <h1>AWAY</h1>
                <ul>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Donated blood and contribute
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Delivered essential items
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Voluteered in Covid19 relief
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={this.props.handlePoints}
                      className="btn btn-large waves-effect waves-light hoverable green accent-3"
                    >
                      Helped Covid19 TF
                    </button>
                  </li>
                </ul>
              </div>

              <input
                size="30"
                className="goodness"
                placeholder="anything else-please type here"
              ></input>

              <div className="submit">
                <Link
                  to="/popupProfile"
                  style={{
                    width: "80px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    padding: "0",
                    float: "right",
                    marginRight: "30%",
                  }}
                  className="btn"
                >
                  <span>Submit </span>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </body>
    );
  }
}

export default Profile;
