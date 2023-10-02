// BackButton.js
import React from 'react';

function BackButton() {
  const goBack = () => {
    window.history.back(); // Go back to the previous page in the browser's history
  };

  return (
    <button onClick={goBack}>
      Back to Previous Page
    </button>
  );
}

export default BackButton;
