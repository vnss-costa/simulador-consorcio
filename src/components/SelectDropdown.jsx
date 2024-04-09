import React from 'react';

const SelectDropdown = React.memo(({ options, value, onChange, defaultLabel }) => {
  return (
    <select className="select-dropdown" value={value} onChange={onChange} >
      <option value="">{defaultLabel}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default SelectDropdown;
