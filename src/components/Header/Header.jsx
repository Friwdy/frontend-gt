import React from 'react'
import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo"></div>
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar produtos"/>
                    </div>
            <button className="btn-cadastrar">Cadastre-se</button>
            <button className="btn-entrar">Entrar</button>
            <div className="cart-icon"></div>
            <button className="btn-home">Home</button>
            <button className="btn-produtos">Produtos</button>
            <button className="btn-categorias">Categorias</button>
            <button className="btn-pedidos">Meus Pedidos</button>
        </header>
    );
};

export default Header;