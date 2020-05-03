import React, { Component } from "react";
import { Link } from "react-router-dom";

class Popup extends Component {
  render() {
    return (
      <body>
        <div
          className="popup"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20%",
            width: "60%",
            border: "1px solid black",
            padding: "10px",
            backgroundColor: "coral",
          }}
        >
          <p>
            Thank you for participating. You now have <b>Earned goodpoints</b>.
            Please sign up to claim your points. It only takes a moment
          </p>
          <div className="col s6" style={{ marginInlineStart: "40%" }}>
            <Link
              to="/register"
              style={{
                width: "100px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                padding: "3px 8px",
                backgroundColor: "blue",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Sign up
            </Link>
          </div>
        </div>
      </body>
    );
  }
}

export default Popup;
