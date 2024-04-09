import React, { useState } from 'react';

const Popup = ({ text }) => {
  const [isVisible, setVisibility] = useState(true);

  const hidePopup = () => {
    setVisibility(false);
  };

  return (
    isVisible && (
      <div className="popup">
        <div className="popup-content">
          <span className="close" onClick={hidePopup}>&times;</span>
          <p>{text}</p>
        </div>
      </div>
    )
  );
};

export default Popup;
