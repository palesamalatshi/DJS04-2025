import React from "react";

/**
 * Error display component
 */
const ErrorState = ({ message }) => (
  <div className="error-state">
    <p>Error: {message}</p>
  </div>
);

export default ErrorState;