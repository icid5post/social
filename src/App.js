import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfilePage from "./Pages/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsPage from "./Pages/Dialogs";
import UsersPage from "./Pages/Users";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="app-content">
          <div className="pages-content">
            <Route path={"/profile"} exact render={() => <ProfilePage />} />
          </div>

          <Route render={() => <DialogsPage />} path={"/dialogs"} />

          <Route render={() => <UsersPage />} path={"/users"} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
