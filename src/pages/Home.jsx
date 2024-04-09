import React, { useEffect, useState } from "react";
import {AlignJustify} from 'lucid-react';
import '../css/Styles.css';

import Button from "../components/Button";
import SelectDropdown from "../components/SelectDropdown";
import Info from "../components/Info";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";

const Home = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const [autoBrands, setAutoBrands] = useState([]);
  const [autoModels, setAutoModels] = useState([]);
  const [autoAnos, setAutoAnos] = useState([]);
  const [autoPreco, setAutoPreco] = useState('');
  const [loading, setLoading] = useState(true);
  
  const automoveis = [
    { value: 'caminhoes', label: 'Caminhões' },
    { value: 'carros', label: 'Carros' },
    { value: 'motos', label: 'Motos' }
  ];
  
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedAno, setSelectedAno] = useState('');
  const [selectedPreco, setSelectedPreco] = useState('');

  useEffect(() => {
    const fetchAutoBrands = async () => {
      try {
        const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${selectedOption}/marcas`);
        if (!response.ok) {
          throw new Error("Falha ao buscar os dados da API");
        }
        const data = await response.json();
        setAutoBrands(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAutoModels = async () => {
      try {
        const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${selectedOption}/marcas/${selectedBrand}/modelos`);
        if (!response.ok) {
          throw new Error("Falha ao buscar os dados da API");
        }
        const data = await response.json();
        setAutoModels(data.modelos);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAutoAnos = async () => {
      try {
        const response = await 
        fetch(`https://parallelum.com.br/fipe/api/v1/${selectedOption}/marcas/${selectedBrand}/modelos/${selectedModel}/anos`);
        if (!response.ok) {
          throw new Error("Falha ao buscar os dados da API");
        }
        const data = await response.json();
        setAutoAnos(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAutoPreco = async () => {
      try {
        const response = await 
        fetch(`https://parallelum.com.br/fipe/api/v1/${selectedOption}/marcas/${selectedBrand}/modelos/${selectedModel}/anos/${selectedAno}`);
        if (!response.ok) {
          throw new Error("Falha ao buscar os dados da API");
        }
        const data = await response.json();
        setAutoPreco(data.Valor);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } finally {
        setLoading(false);
      }
    };


    if (selectedOption) {
      setLoading(true);
      fetchAutoBrands()
      .then(() => fetchAutoModels())
      .then(() => fetchAutoAnos())
      .then(() => fetchAutoPreco())
      .catch((error) => console.error("Erro ao buscar os dados:", error))
      .finally(() => setLoading(false));
    }
  }, [selectedOption, selectedBrand, selectedModel, selectedAno]);


  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleAnoChange = (event) => {
    setSelectedAno(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePrecoChange = (event) => {
    setSelectedPreco(event.target.value);
  } 

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleButtonClick = () => {
    console.log('Botão clicado');  
  };

  console.log(autoPreco)

  return (
    <div className='body'>
      <AlignJustify className='sidebar-icon' onClick={toggleSideBar}/>
      <SideBar isSideBarOpen={isSideBarOpen}/>
      <Header/>
      <div className='title'>
        <h1>Faça sua simulação!</h1>
      </div>
      <div className='container'>
        <SelectDropdown 
          options={automoveis} 
          value={selectedOption} 
          onChange={handleSelectChange}
          defaultLabel={'Selecione o tipo de veículo'}
          />
        <SelectDropdown 
          options={autoBrands.map (brand => ({ value: brand.codigo, label: brand.nome }))} 
          value = {selectedBrand}
          onChange={handleBrandChange}
          defaultLabel={'Selecione a marca'}
          />
        <SelectDropdown 
          options={autoModels.map (model => ({value: model.codigo, label: model.nome}))}
          value={selectedModel} 
          onChange={handleModelChange}
          defaultLabel={'Selecione o modelo'} 
          />
        <SelectDropdown 
          options={autoAnos.map (ano => ({value: ano.codigo, label: ano.nome}))}
          value={selectedAno} 
          onChange={handleAnoChange}
          defaultLabel={'Selecione o ano'} 
        />
        <Info label={'Preço'} value={autoPreco}/>
        <div className='buttons-cage'>
          <Button to={`/Simulate?value=${autoPreco}`} children={'Simular'} onClick={handleButtonClick}/>
          <Button to={'/Contact'} children={'Contato'} onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
