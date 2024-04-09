import React, { useState } from 'react';

const Popup = ({ message, onClose, additionalContent }) => {
  const [isVisible, setVisibility] = useState(true);

  const hidePopup = () => {
    setVisibility(false)
    onClose()
  };

  console.log(message);
  console.log(additionalContent);
  return (
    isVisible && (
      <div className="popup">
        <div className="popup-content">
          {message && <p>{message}</p>}
          {additionalContent ? (
            <div className="popup-content" onClick={hidePopup}>{additionalContent}</div>
          ) : (          
            <span className="close" onClick={hidePopup}>&times;</span>
          )}
        </div>
      </div>
    )
  );
};

export default Popup;
