import React from 'react';

const Input = ({ value, onChange, placeholder, name }) => {
  return (
    <input
        className='input'
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
    />
  );
};

export default Input;