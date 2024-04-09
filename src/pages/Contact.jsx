import React, { useEffect, useState } from "react";

import '../css/Styles.css';

import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header";
import PopUp from "../components/Popup";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', celular: '' });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPopupOpen(true);
        setPopupMessage('Dados enviados com sucesso!');
    };

    const handleClosePopUp = () => {
        setIsPopupOpen(false);
        setFormData({ name: '', email: '', celular: '' });
    };

    return (
        <div className='body'>
            <Header/>
            <div className='title'>
                <h1>Entraremos em contato com você!</h1>
            </div>
            <form className='container' onSubmit={handleSubmit}>
                <Input 
                    value={formData.name}
                    onChange={handleInputChange}
                    name='name'
                    placeholder="Nome"
                />
                <Input 
                    value={formData.email}
                    onChange={handleInputChange}
                    name='email'
                    placeholder="Email"
                />
                <Input 
                    value={formData.celular}
                    onChange={handleInputChange}
                    name='celular'
                    placeholder="Telefone"
                />
                <Button children={'Enviar'} onClick={handleSubmit}/>
                {isPopupOpen && <PopUp message={popupMessage} additionalContent={<Button onClick={handleClosePopUp}>Fechar</Button>} onClose={handleClosePopUp}/>}
            </form>
        </div>
    );
};

export default Contact;
