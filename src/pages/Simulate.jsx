import React, { useEffect, useState } from "react";

import '../css/Styles.css';

import Button from "../components/Button";
import SelectDropdown from "../components/SelectDropdown";
import Info from "../components/Info";
import Input from "../components/Input";
import Header from "../components/Header";

const Simulate = () => {
  const [valueParam, setValueParam] = useState(parseFloat(new URLSearchParams(window.location.search).get('value')?.replace("R$","").replace(".","").replace(",",".")) || 0);
  const [selectedValue, setSelectedValue] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [resultado, setResultado] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleParcelasChange = (event) => setParcelas(event.target.value);
  const handleChange = (event) => setSelectedValue(event.target.value);
  const handleButtonClick = () => {
    setShowInfo(true);
    setValueParam(parseFloat(new URLSearchParams(window.location.search).get('value')?.replace("R$","").replace(".","").replace(",",".")) || 0);
  };

  useEffect(() => {
    if (selectedValue && parcelas) {
      const valorParcela = valueParam / parseInt(parcelas);
      setResultado(valorParcela);
    }
  }, [selectedValue, parcelas]);

  const options = Array.from({length: 24}, (_, i) => ({ value: `${i + 1}`, label: `${i + 1}` }));

  return (
    <div className='body'>
      <Header />
      <div className='title'>
        <h1>Simulação</h1>
      </div>
      <div className='container'>
        <Info value={`R$ ${valueParam.toFixed(2)}`}/>
        <SelectDropdown options={options} value={selectedValue} onChange={handleChange} defaultLabel={'Selecione o mês a ser contemplado'} />
        <Input value={parcelas} onChange={handleParcelasChange} placeholder="Digite o número de parcelas (1-54)" />
        {showInfo && <Info value={resultado !== null ? `Valor da parcela: ${resultado.toFixed(2)}` : ""}/>}
        <div className='buttons-cage'>
          <Button children={'Simular'} onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
};

export default Simulate;
