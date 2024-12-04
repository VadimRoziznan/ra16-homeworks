import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './loadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <TailSpin
        height="150"
        width="150"
        color="#00BFFF"
        ariaLabel="loading"
      />
    </div>
  );
}

export default LoadingSpinner;
