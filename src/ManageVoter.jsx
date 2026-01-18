import React, { useState } from "react";


const ManageVoter = () => {
  // Dummy pending applications
  const [pendingVoters, setPendingVoters] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      voterId: "IND12345",
      constituency: "Delhi Central",
      age: 32,
      document: "AadharCard_Ravi.pdf",
    },
    {
      id: 2,
      name: "Priya Sharma",
      voterId: "IND98765",
      constituency: "Mumbai North",
      age: 28,
      document: "AadharCard_Priya.pdf",
    },
    {
      id: 3,
      name: "Amit Singh",
      voterId: "IND54321",
      constituency: "Lucknow East",
      age: 41,
      document: "AadharCard_Amit.pdf",
    },
  ]);

  // Registered voters after approval
  const [registeredVoters, setRegisteredVoters] = useState([]);

  // Handle accept voter
  const handleAccept = (voter) => {
    setRegisteredVoters([...registeredVoters, voter]);
    setPendingVoters(pendingVoters.filter((v) => v.id !== voter.id));
  };

  // Handle reject voter
  const handleReject = (voterId) => {
    setPendingVoters(pendingVoters.filter((v) => v.id !== voterId));
  };

  // Handle view document (for demo)
  const handleViewDocument = (voter) => {
    alert(`Viewing document: ${voter.document}`);
  };

  return (
    <div className="manage-voter-container">
      <header className="voter-header">
        <h1>Manage Voters</h1>
        <p>
          Review and verify voter applications before adding them to the
          electoral database.
        </p>
      </header>

      {/* Pending voter applications */}
      <section className="voter-list-section">
        <h2>Pending Voter Applications</h2>
        {pendingVoters.length === 0 ? (
          <p className="no-voters">No pending voter applications.</p>
        ) : (
          <table className="voter-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Voter ID</th>
                <th>Constituency</th>
                <th>Age</th>
                <th>Documents</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingVoters.map((voter, index) => (
                <tr key={voter.id}>
                  <td>{index + 1}</td>
                  <td>{voter.name}</td>
                  <td>{voter.voterId}</td>
                  <td>{voter.constituency}</td>
                  <td>{voter.age}</td>
                  <td>
                    <button
                      className="view-doc-btn"
                      onClick={() => handleViewDocument(voter)}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      className="accept-btn"
                      onClick={() => handleAccept(voter)}
                    >
                      Accept
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleReject(voter.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Approved voter list */}
      <section className="voter-list-section">
        <h2>Registered Voters</h2>
        {registeredVoters.length === 0 ? (
          <p className="no-voters">No registered voters yet.</p>
        ) : (
          <table className="voter-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Voter ID</th>
                <th>Constituency</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {registeredVoters.map((voter, index) => (
                <tr key={voter.id}>
                  <td>{index + 1}</td>
                  <td>{voter.name}</td>
                  <td>{voter.voterId}</td>
                  <td>{voter.constituency}</td>
                  <td>{voter.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default ManageVoter;
