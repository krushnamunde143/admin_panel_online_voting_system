import React, { useState } from "react";

const ElectionResult = () => {
  const [elections, setElections] = useState([
    {
      id: 1,
      name: "Lok Sabha Election 2025",
      state: "Maharashtra",
      district: "Pune",
      block: "Hinjewadi",
      status: "Ongoing",
      resultDeclared: false,
      candidates: [
        { id: 1, name: "Party A", votes: 4500 },
        { id: 2, name: "Party B", votes: 3900 },
        { id: 3, name: "Party C", votes: 2500 },
      ],
    },
    {
      id: 2,
      name: "State Election 2025",
      state: "Karnataka",
      district: "Bengaluru",
      block: "Whitefield",
      status: "Ongoing",
      resultDeclared: false,
      candidates: [
        { id: 1, name: "Party X", votes: 5200 },
        { id: 2, name: "Party Y", votes: 4700 },
      ],
    },
  ]);

  const handleDeclareResult = (id) => {
    setElections((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, resultDeclared: true, status: "Declared" } : e
      )
    );
  };

  const handleSaveAndClear = (id) => {
    console.log("✅ Result saved for election:", id);
    setElections((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="manage-election-container">
      <div className="election-header">
        <h1>Election Results Management</h1>
        <p>Monitor and declare results for ongoing elections.</p>
      </div>

      <div className="election-list-section">
        <h2>Declared and Ongoing Elections</h2>
        {elections.length === 0 ? (
          <p className="no-elections">No elections found.</p>
        ) : (
          <table className="election-table">
            <thead>
              <tr>
                <th>Election Name</th>
                <th>State</th>
                <th>District</th>
                <th>Block</th>
                <th>Status</th>
                <th>Top Candidate</th>
                <th>Votes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {elections.map((election) => {
                const topCandidate = election.candidates.reduce((max, c) =>
                  c.votes > max.votes ? c : max
                );
                return (
                  <tr key={election.id}>
                    <td>{election.name}</td>
                    <td>{election.state}</td>
                    <td>{election.district}</td>
                    <td>{election.block}</td>
                    <td>{election.status}</td>
                    <td>{topCandidate.name}</td>
                    <td>{topCandidate.votes}</td>
                    <td>
                      {!election.resultDeclared ? (
                        <button
                          className="accept-btn"
                          onClick={() => handleDeclareResult(election.id)}
                        >
                          Declare Result
                        </button>
                      ) : (
                        <button
                          className="accept-btn"
                          onClick={() => handleSaveAndClear(election.id)}
                          disabled={!election.resultDeclared}
                        >
                          Save & Clear
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ElectionResult;
