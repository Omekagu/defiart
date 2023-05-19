import React, { useState } from 'react';

const Switch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`toggle-button ${isActive ? 'active' : ''}`}
      onClick={handleToggle}
    >
      <div className="slider"></div>
    </div>
  );
};

export default Switch;
