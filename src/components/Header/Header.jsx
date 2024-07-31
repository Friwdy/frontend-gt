import React from 'react';
import logo from '../../imagens/logo-header.png';
import miniCart from '../../imagens/mini-cart.png';
import './styles.css';

const Header = () => {
    return (
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="account">
            <a href="#" className="register-link">Cadastre-se</a>
            <button>Entrar</button>
            <a href="#" className="cart">
              <img src={miniCart} alt="Carrinho de Compras" />
            </a>
          </div>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Compras</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;