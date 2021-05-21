import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Templates from "./pages/Templates";
import Landing from "./pages/Landing";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Landing} />
          <Route exact path="/templates" component={Templates} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
