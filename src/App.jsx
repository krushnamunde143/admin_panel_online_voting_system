import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import ManageVoter from "./ManageVoter";
import ManageCandidate from "./ManageCandidate";
import ManageElection from "./ManageElection";
import VotingResults from "./VotingResult";

import Profile from "./Profile";
import "./index.css"; 

function App() {
  return (
    <Router>
   
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <NavLink to="/" end className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage-voter" className="nav-item">
              Manage Voter
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage-candidates" className="nav-item">
              Manage Candidates
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage-elections" className="nav-item">
              Manage Elections
            </NavLink>
          </li>
          <li>
            <NavLink to="/voting-results" className="nav-item">
              Voting Results
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="nav-item">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ============================= */}
      {/* 🔹 PAGE ROUTES */}
      {/* ============================= */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage-voter" element={<ManageVoter />} />
          <Route path="/manage-candidates" element={<ManageCandidate />} />
          <Route path="/manage-elections" element={<ManageElection />} />
          <Route path="/voting-results" element={<VotingResults />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
