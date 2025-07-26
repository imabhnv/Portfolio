import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 4000); // 4s loader
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="grid-loader-container">
      <div className="grid-loader">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="grid-dot"></div>
        ))}
      </div>
      <h2 className="grid-loader-text">Loading...</h2>
    </div>
  );
};

export default Loader;
