import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import UserView from "./UserView";
import UserPDFView from "./UserPDFView";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/user/:key" element={<UserView />} />
            <Route exact path="/user/:key/pdf" element={<UserPDFView />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}



function About() {
  return <h2>About me (testing routes)</h2>;
}

