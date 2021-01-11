import React from "react";
//global Style
import GlobalStyle from "./components/GlobalStyle";
//import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
