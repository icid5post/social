import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfilePage from "./Pages/Profile/ProfileContainer";
import UsersListContainer from "./Pages/Users/UsersContainer";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import DialogsPage from "./Pages/Dialogs";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./Pages/Login/LoginContainer";
import { compose } from "redux";
import { initializedApp } from "./redux/app-reducer";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <p>Loading...</p>;
    } else {
      return (
        <BrowserRouter>
          <div className="App">
            <HeaderContainer />
            <Sidebar />
            <div className="app-content">
              <div className="pages-content">
                <Route path={"/profile"} exact render={() => <ProfilePage />} />
                <Route
                  path={"/profile/:userId"}
                  render={() => <ProfilePage />}
                />
              </div>

              <Route render={() => <DialogsPage />} path={"/dialogs"} />

              <Route render={() => <UsersListContainer />} path={"/users"} />

              <Route render={() => <LoginContainer />} path={"/login"} />
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}

const mapStateToProps = state => ({
  initialized: state.appReducer.initializedApp
});

const mapDispatchToProps = {
  initializedApp
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
