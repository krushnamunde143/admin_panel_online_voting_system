import React, { useState } from "react";


const ManageCandidate = () => {
  // Dummy candidate applications (no symbol yet)
  const [pendingCandidates, setPendingCandidates] = useState([
    {
      id: 1,
      name: "Rahul Verma",
      party: "National Unity Party",
      constituency: "Delhi Central",
      manifesto: "manifesto_rahul.pdf",
      symbol: null,
    },
    {
      id: 2,
      name: "Neha Patel",
      party: "People's Voice Party",
      constituency: "Mumbai North",
      manifesto: "manifesto_neha.pdf",
      symbol: null,
    },
    {
      id: 3,
      name: "Arjun Mehta",
      party: "Youth Progress Front",
      constituency: "Lucknow East",
      manifesto: "manifesto_arjun.pdf",
      symbol: null,
    },
  ]);

  // Approved candidates
  const [approvedCandidates, setApprovedCandidates] = useState([]);

  // Accept candidate
  const handleAccept = (candidate) => {
    if (!candidate.symbol) {
      alert("Please upload a symbol before accepting the candidate.");
      return;
    }
    setApprovedCandidates([...approvedCandidates, candidate]);
    setPendingCandidates(pendingCandidates.filter((c) => c.id !== candidate.id));
  };

  // Reject candidate
  const handleReject = (candidateId) => {
    setPendingCandidates(pendingCandidates.filter((c) => c.id !== candidateId));
  };

  // View manifesto (demo)
  const handleViewManifesto = (candidate) => {
    alert(`Viewing manifesto: ${candidate.manifesto}`);
  };

  // Upload symbol (admin only)
  const handleSymbolUpload = (e, candidateId) => {
    const file = e.target.files[0];
    if (file) {
      const symbolName = file.name;
      setPendingCandidates((prev) =>
        prev.map((c) =>
          c.id === candidateId ? { ...c, symbol: symbolName } : c
        )
      );
    }
  };

  return (
    <div className="manage-candidate-container">
      <header className="candidate-header">
        <h1>Manage Candidates</h1>
        <p>Election Commission can review, assign symbols, and approve candidates.</p>
      </header>

      {/* Pending Applications */}
      <section className="candidate-list-section">
        <h2>Pending Candidate Applications</h2>
        {pendingCandidates.length === 0 ? (
          <p className="no-candidates">No pending applications.</p>
        ) : (
          <table className="candidate-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Party</th>
                <th>Constituency</th>
                <th>Symbol</th>
                <th>Manifesto</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingCandidates.map((candidate, index) => (
                <tr key={candidate.id}>
                  <td>{index + 1}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.party}</td>
                  <td>{candidate.constituency}</td>
                  <td>
                    {candidate.symbol ? (
                      <span className="symbol-uploaded">
                        {candidate.symbol}
                      </span>
                    ) : (
                      <label className="upload-symbol-label">
                        Upload
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleSymbolUpload(e, candidate.id)}
                          className="symbol-upload-input"
                        />
                      </label>
                    )}
                  </td>
                  <td>
                    <button
                      className="view-doc-btn"
                      onClick={() => handleViewManifesto(candidate)}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      className="accept-btn"
                      onClick={() => handleAccept(candidate)}
                    >
                      Accept
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleReject(candidate.id)}
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

      {/* Approved Candidates */}
      <section className="candidate-list-section">
        <h2>Approved Candidates</h2>
        {approvedCandidates.length === 0 ? (
          <p className="no-candidates">No approved candidates yet.</p>
        ) : (
          <table className="candidate-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Party</th>
                <th>Constituency</th>
                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>
              {approvedCandidates.map((candidate, index) => (
                <tr key={candidate.id}>
                  <td>{index + 1}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.party}</td>
                  <td>{candidate.constituency}</td>
                  <td>{candidate.symbol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default ManageCandidate;
