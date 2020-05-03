import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import gdDeed from "./components/gdDeed/gdDeed";
import Popup from "./components/popup/Popup";
import Working from "./components/working/Working";
import Profile from "./components/profile/Profile";
import PopupProfile from "./components/popup/PopupProfile";

class App extends Component {
  state = {
    pntsEarned: 0,
    pntsRedeemed: 0,
  };

  handlePoints = () => {
    this.setState({
      pntsEarned: this.state.pntsEarned + 2,
      pntsRedeemed: this.state.pntsRedeemed,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/gdDeed" component={gdDeed} />
          <Route exact path="/popup" component={Popup} />
          <Route exact path="/working" component={Working} />
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                pntsEarned={this.state.pntsEarned}
                pntsRedeemed={this.state.pntsRedeemed}
                handlePoints={this.handlePoints}
              />
            )}
          />
          <Route
            exact
            path="/popupProfile"
            render={() => (
              <PopupProfile
                pntsEarned={this.state.pntsEarned}
                pntsRedeemed={this.state.pntsRedeemed}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
