import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo-header.png';
import lupa from '../../imagens/lupa.png'; // Imagem da lupa para a barra de pesquisa
import miniCart from '../../imagens/mini-cart.png';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="left-side">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/categorias">Categorias</Link></li>
              <li><Link to="/meus-pedidos">Meus Pedidos</Link></li>
            </ul>
          </nav>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Pesquisar produtos" 
            className="search-bar" 
          />
          <button className="search-button">
            <img src={lupa} alt="Lupa" className="search-icon" />
          </button>
        </div>
        <div className="right-side">
          <Link to="/cadastro" className="register-link">Cadastre-se</Link>
          <button className="login-button">Entrar</button>
          <Link to="/carrinho" className="cart">
            <img src={miniCart} alt="Carrinho de Compras" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
