import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
