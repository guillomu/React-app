import React from "react";
import Header from "./components/header/";
import Main from "./components/main/";
import Footer from "./components/footer/";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
