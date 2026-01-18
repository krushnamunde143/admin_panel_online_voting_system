import React from "react";


const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Online Voting System</h1>
        <p>Manage elections, candidates, and voters efficiently.</p>
      </header>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card">
            <h3>Voter Management</h3>
            <p>Add, update, and manage voter information with ease.</p>
          </div>
          <div className="service-card">
            <h3>Candidate Management</h3>
            <p>Register candidates and assign them to elections securely.</p>
          </div>
          <div className="service-card">
            <h3>Live Voting Results</h3>
            <p>View and generate real-time voting results instantly.</p>
          </div>
        </div>
      </section>

      <section className="admin-tasks">
        <h2>Admin Responsibilities</h2>
        <ul>
          <li>Oversee voter registration and candidate approvals</li>
          <li>Manage election schedules and configurations</li>
          <li>Publish results and generate analytical reports</li>
          <li>Post important announcements for voters</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
