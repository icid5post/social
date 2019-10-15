import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./Pages/Profile";
import Dialogs from "./Pages/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <div className="app-content">
          <div className="pages-content">
            {/*<Profile/>*/}
            <Route component={Profile} path={"/profile"}></Route>
          </div>
          <Route component={Dialogs} path={"/dialogs"}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
