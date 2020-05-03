import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./gdDeed.css";

class gdDeed extends Component {
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
                  <img src="./images/icon-facebook.svg" alt="fbLogo"></img>
                </li>
                <li>
                  <img src="./images/icon-instagram.svg" alt="fbLogo"></img>
                </li>
                <li>
                  <img src="./images/icon-twitter.svg" alt="fbLogo"></img>
                </li>
                <li>
                  <img src="./images/icon-youtube.svg" alt="fbLogo"></img>
                </li>
              </ul>
            </div>
          </nav>

          <br></br>
          <br></br>

          <div className="container1" style={{ marginBottom: "20px" }}>
            <h3>Stay home stay SAFE*</h3>
            <h3>Start sharing your goodness stories</h3>
          </div>

          <main>
            <div
              className="main1"
              style={{ float: "left", marginLeft: "5%", width: "45%" }}
            >
              <h1>HOME</h1>
              <ul>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    Maintained social distance
                  </button>
                </li>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    Donated to relief fund
                  </button>
                </li>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    Tipped delivery person
                  </button>
                </li>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    Volunteered online
                  </button>
                </li>
              </ul>
            </div>

            <div
              className="main2"
              style={{
                float: "right",
                marginRight: "5%",
                width: "45%",
                marginTop: "10px",
              }}
            >
              <h1>AWAY</h1>
              <ul>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    Donated blood and contribute
                  </button>
                </li>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    Delivered essential items
                  </button>
                </li>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
                    Voluteered in Covid19 relief
                  </button>
                </li>
                <li>
                  <button className="btn btn-large waves-effect waves-light hoverable green accent-3">
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
          </main>

          <footer>
            <Link
              to="/popup"
              style={{
                width: "100px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                padding: "5px",
                float: "right",
                marginRight: "30%",
              }}
              className="btn"
            >
              <span>Submit </span>
            </Link>
          </footer>
        </div>
      </body>
    );
  }
}

export default gdDeed;
