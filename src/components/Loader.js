import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="fire-loader">🔥 Loading...Hang On 🔥...</div>
    </div>
  );
};

export default Loader;
