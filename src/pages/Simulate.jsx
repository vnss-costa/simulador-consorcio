import React, { useEffect, useState } from "react";

import '../css/Styles.css';

import Button from "../components/Button";
import SelectDropdown from "../components/SelectDropdown";
import Info from "../components/Info";
import Input from "../components/Input";
import Header from "../components/Header";

const Simulate = () => {

    const params = new URLSearchParams(window.location.search);
    const value = params.get('value');

    const [selectedValue, setSelectedValue] = useState('');
    const [parcelas, setParcelas] = useState('');

    const options = Array.from({length: 24}, (_, i) => i + 1);

    const handleParcelasChange = (event) => {
      setParcelas(event.target.value);
      };
    
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    const handleButtonClick = () => {
    console.log('Botão clicado');  
    };

    console.log(options)

  return (
    <div className='body'>
      <Header></Header>
      <div className='title'>
        <h1>Simulação</h1>
      </div>
      <div className='container'>
        <Info value={value}/>
        <SelectDropdown 
          options={options.map(option => ({ value: option, label: option }))} 
          value={selectedValue} 
          onChange={handleChange} 
          defaultLabel={'Selecione o mês a ser contemplado'}
        />
        <Input 
            value={parcelas}
            onChange={handleParcelasChange}
            placeholder="Digite o número de parcelas (1-54)"
        />
        <div className='buttons-cage'>
          <Button children={'Simular'} onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
};

export default Simulate;
