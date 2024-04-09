import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver utilizando React Router para navegação

const Header = () => {
    return (
        <header className='header'>
            <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img className='logo' src="/GG-PRETO.png" alt="Logo" style={{ width: '100px', cursor: 'pointer' }} />
                </Link>
                {/* Adicione outros elementos de navegação, como links de menu, aqui */}
            </div>
        </header>
    );
};

export default Header;
