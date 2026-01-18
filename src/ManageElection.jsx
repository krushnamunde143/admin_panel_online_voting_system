import React, { useState } from "react";

function ManageElection() {
  const [elections, setElections] = useState([
    {
      id: 1,
      name: "General Assembly Election 2025",
      state: "Maharashtra",
      district: "Pune",
      block: "Haveli",
      startDate: "2025-11-01",
      endDate: "2025-11-10",
      status: "Registration Open",
    },
  ]);

  const [newElection, setNewElection] = useState({
    name: "",
    state: "",
    district: "",
    block: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setNewElection({ ...newElection, [e.target.name]: e.target.value });
  };

  const handleAddElection = () => {
    if (
      !newElection.name ||
      !newElection.state ||
      !newElection.district ||
      !newElection.block
    ) {
      return alert("Please fill all fields!");
    }

    const newEntry = {
      ...newElection,
      id: elections.length + 1,
      status: "Not Started",
    };

    setElections([...elections, newEntry]);
    setNewElection({
      name: "",
      state: "",
      district: "",
      block: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleStatusChange = (id, newStatus) => {
    setElections(
      elections.map((election) =>
        election.id === id ? { ...election, status: newStatus } : election
      )
    );
  };

  return (
    <div className="manage-election-container">
      <div className="election-header">
        <h1>Election Management</h1>
        <p>Admin can create and control elections from this panel.</p>
      </div>

      <div className="election-form-section">
        <h2>Create New Election</h2>
        <div className="election-form">
          <div className="form-group">
            <label>Election Name</label>
            <input
              type="text"
              name="name"
              value={newElection.name}
              onChange={handleChange}
              placeholder="Enter election title"
            />
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={newElection.state}
              onChange={handleChange}
              placeholder="Enter state"
            />
          </div>

          <div className="form-group">
            <label>District</label>
            <input
              type="text"
              name="district"
              value={newElection.district}
              onChange={handleChange}
              placeholder="Enter district"
            />
          </div>

          <div className="form-group">
            <label>Block</label>
            <input
              type="text"
              name="block"
              value={newElection.block}
              onChange={handleChange}
              placeholder="Enter block"
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={newElection.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={newElection.endDate}
              onChange={handleChange}
            />
          </div>

          <button className="add-election-btn" onClick={handleAddElection}>
            Add Election
          </button>
        </div>
      </div>

      <div className="election-list-section">
        <h2>Manage Existing Elections</h2>

        {elections.length === 0 ? (
          <p className="no-elections">No elections available.</p>
        ) : (
          <table className="election-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Election Name</th>
                <th>State</th>
                <th>District</th>
                <th>Block</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {elections.map((election) => (
                <tr key={election.id}>
                  <td>{election.id}</td>
                  <td>{election.name}</td>
                  <td>{election.state}</td>
                  <td>{election.district}</td>
                  <td>{election.block}</td>
                  <td>{election.startDate}</td>
                  <td>{election.endDate}</td>
                  <td>{election.status}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="accept-btn"
                        onClick={() =>
                          handleStatusChange(election.id, "Voting Ongoing")
                        }
                      >
                        Start Voting
                      </button>

                      <button
                        className="view-doc-btn"
                        onClick={() =>
                          handleStatusChange(election.id, "Voting Ended")
                        }
                      >
                        End Voting
                      </button>

                      <button
                        className="view-doc-btn"
                        onClick={() =>
                          handleStatusChange(election.id, "Counting")
                        }
                      >
                        Start Counting
                      </button>

                      <button
                        className="reject-btn"
                        onClick={() =>
                          handleStatusChange(election.id, "Completed")
                        }
                      >
                        Complete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ManageElection;
