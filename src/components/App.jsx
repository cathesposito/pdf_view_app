import React from "react";

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home';
import UserView from "./UserView";
import UserPDFView from "./UserPDFView";

export default function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/user/:key" element={<UserView />} />
        <Route exact path="/user/pdf/:key" element={<UserPDFView />} />
        </Routes>
      </HashRouter>
    </div>
  );
}




function About() {
  return <h2>About me (testing routes)</h2>;
}

