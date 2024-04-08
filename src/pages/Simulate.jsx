import React, { useEffect, useState } from "react";

import '../css/Styles.css';

import Button from "../components/Button";
import SelectDropdown from "../components/SelectDropdown";
import Info from "../components/Info";

const Simulate = () => {

    const params = new URLSearchParams(window.location.search);
    const value = params.get('value');

    const [selectedValue, setSelectedValue] = useState('');

    const options = Array.from({length: 24}, (_, i) => i + 1);
    
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    const handleButtonClick = () => {
    console.log('Botão clicado');  
    };

  return (
    <div className='body'>
      <div className='title'>
        <h1>Simulação</h1>
      </div>
      <div className='container'>
        <Info value={value}/>
        {/* <SelectDropdown options={automoveis} value={selectedOption} onChange={handleSelectChange} /> */}
        {/* <SelectDropdown options={automoveis} value={selectedOption} onChange={handleSelectChange} /> */}
        <div className='buttons-cage'>
          <Button children={'Simular'} onClick={handleButtonClick}/>
          <Button children={'Contato'} onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
};

export default Simulate;
