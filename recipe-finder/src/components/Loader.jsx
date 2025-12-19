import React from "react";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <div className="spinner" style={{
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #333",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        animation: "spin 1s linear infinite",
        margin: "0 auto"
      }} />
      <p>Loading...</p>

      {/* Add CSS animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
