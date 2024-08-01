import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/cadastro" className="register-link">Cadastre-se</Link>
          <button>Entrar</button>
          <Link to="/carrinho" className="cart">
            <img src={miniCart} alt="Carrinho de Compras" />
          </Link>
        </div>
      </div>
      <nav className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/compras">Compras</Link></li>
          <li><Link to="/meus-pedidos">Meus Pedidos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;