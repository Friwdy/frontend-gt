import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul>
                    <h3>MRstudio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="redes-sociais">
                        <img src="img/facebook.png" alt="facebook"/>
                        <img src="img/instagram.png" alt="instagram"/>
                        <img src="img/twitter.png" alt="twitter"/>
                    </div>
                </ul>
                <ul>
                    <h3>Informação</h3>
                    <li><a href="#">Sobre Drip Store</a></li>
                    <li><a href="#">Segurança</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Trabalhe conosco</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                </ul>
                <ul>
                <h3>Categorias</h3>
                    <li><a href="#">Camisetas</a></li>
                    <li><a href="#">Calças</a></li>
                    <li><a href="#">Bonés</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Tênis</a></li>
                </ul>
                <ul>
                    <h3>Contato</h3>
                    <li>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    </li>
                    <li>
                        <p>(85) 3051-3411</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;