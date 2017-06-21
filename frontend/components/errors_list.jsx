import React from 'react';

const ErrorsList = ({errors}) => {
  return (
    <ul id="errors-list">
      {errors.map((error, idx) => (<li className="error-item" key={idx}>{error}</li>))}
    </ul>
  );
};

export default ErrorsList;
