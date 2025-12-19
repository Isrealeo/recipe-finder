import React from "react";


const ErrorMessage = ({ message }) => {
  return (
    <div style={{
      textAlign: "center",
      color: "red",
      margin: "2rem 0",
      fontWeight: "bold"
    }}>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
