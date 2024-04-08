import React from 'react';

import '../css/Styles.css';

const SelectDropdown = ({ options, value, onChange, defaultLabel }) => {
  return (
    <select className="select-dropdown" value={value} onChange={onChange}>
      <option value="">{defaultLabel}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;