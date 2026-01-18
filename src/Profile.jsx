import React, { useState, useRef, useEffect } from "react";

const AdminProfile = () => {
  const [isAttended, setIsAttended] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Start Camera Automatically when Popup Opens
  useEffect(() => {
    if (showPopup) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [showPopup]);

  // Start Camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // Start auto capture after 3 seconds
        setTimeout(() => captureFace(), 3000);
      }
    } catch (error) {
      alert("Please allow camera permissions to mark attendance.");
    }
  };

  // Capture Face Automatically
  const captureFace = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");

    setCaptured(true);
    setImageSrc(imageData);
    setIsAttended(true);

    stopCamera();
    setTimeout(() => {
      setShowPopup(false);
      alert("✅ Attendance marked successfully!");
    }, 1500);
  };

  // Stop Camera
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    if (videoRef.current) videoRef.current.srcObject = null;
  };

  // Handle Logout
  const handleLogout = () => {
    alert("You have logged out successfully for the day.");
    setIsAttended(false);
    setCaptured(false);
    setImageSrc(null);
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Admin Profile</h1>
        <p>Election Commission Admin — Profile & Attendance Management</p>
      </header>

      <div className="profile-card">
        <div className="profile-avatar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin Avatar"
          />
          <h3>Rajesh Verma</h3>
          <p>Chief Election Officer</p>
        </div>

        <div className="profile-info">
          <div className="profile-field">
            <label>Name</label>
            <span>Rajesh Verma</span>
          </div>
          <div className="profile-field">
            <label>Email</label>
            <span>rajesh.verma@eci.gov.in</span>
          </div>
          <div className="profile-field">
            <label>Office Location</label>
            <span>Delhi, India</span>
          </div>

          <div className="profile-actions">
            <button
              className="add-election-btn"
              onClick={() => setShowPopup(true)}
            >
              Mark Attendance
            </button>

            <button
              className="reject-btn"
              onClick={handleLogout}
              disabled={!isAttended}
            >
              Logout
            </button>
          </div>

          {isAttended && (
            <p className="attendance-status">✅ Attendance marked for today</p>
          )}
        </div>
      </div>

      {/* Attendance Popup */}
      {showPopup && (
        <div className="attendance-popup">
          <div className="popup-content">
            <h2>Live Face Attendance</h2>
            <div
              className={`camera-container ${
                captured ? "camera-success" : "camera-active"
              }`}
            >
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="camera-feed"
              ></video>
              <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            </div>
            <p className="camera-hint">
              {captured
                ? "✅ Face captured successfully!"
                : "📸 Please look directly into the camera..."}
            </p>
            <button
              className="reject-btn"
              onClick={() => {
                stopCamera();
                setShowPopup(false);
              }}
              disabled={captured}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
