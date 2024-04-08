import React from 'react';

import { Link } from 'react-router-dom';

import '../css/Styles.css';

const Button = ({ to, children, onClick }) => {
  return (
    <Link to={to}>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;