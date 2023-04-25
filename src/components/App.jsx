import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<About />} />
            <Route exact path="/recovery-password" element={<Users />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}