import React, { useEffect, useState } from "react";

import '../css/Styles.css';

import Button from "../components/Button";
import Input from "../components/Input";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

    const handleNameChange = (event) => {
    setName(event.target.value);
    };

    const handleEmailChange = (event) => {
    setName(event.target.value);
    };

    const handleCelularChange = (event) => {
    setCelular(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Formulário enviado com sucesso!");
    };

    return (
    <div className='body'>
        <div className='title'>
        <h1>Deixe seu contato!</h1>
        </div>
        <form className='container' onSubmit={handleSubmit}>
            <div>
                <Input 
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Nome"
                />
                <Input 
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                />
                <Input 
                    value={celular}
                    onChange={handleCelularChange}
                    placeholder="Telefone"
                />
                <Button children={'Enviar'} onClick={handleSubmit}/>
            </div>
        </form>
    </div>
  );
};

export default Contact;
