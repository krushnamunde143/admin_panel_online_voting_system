import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./HomePage";
import "./index.css"; 

const NavbarRoutes = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="nav-list">
          <li><NavLink to="/Home" end className="nav-item">Home</NavLink></li>
          <li><NavLink to="/manage-voter" className="nav-item">Manage Voter</NavLink></li>
          <li><NavLink to="/manage-candidates" className="nav-item">Manage Candidates</NavLink></li>
          <li><NavLink to="/manage-elections" className="nav-item">Manage Elections</NavLink></li>
          <li><NavLink to="/voting-results" className="nav-item">Voting Results</NavLink></li>
          <li><NavLink to="/reports" className="nav-item">Reports</NavLink></li>
          <li><NavLink to="/profile" className="nav-item">Profile</NavLink></li>
        </ul>
      </nav>

      <div className="page-content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/manage-voter" element={<ManageVoter />} />
          <Route path="/manage-candidates" element={<ManageCandidates />} />
          <Route path="/manage-elections" element={<ManageElections />} />
          <Route path="/voting-results" element={<VotingResults />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default NavbarRoutes;
