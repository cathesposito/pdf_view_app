import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home';
import UserView from "./UserView";
import UserPDFView from "./UserPDFView";

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/user/:key" element={<UserView />} />
        <Route exact path="/user/pdf/:key" element={<UserPDFView />} />
        </Routes>
      </Router>
    </div>
  );
}




function About() {
  return <h2>About me (testing routes)</h2>;
}

