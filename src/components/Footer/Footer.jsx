import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="footer-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quod laboriosam maxime harum architecto dolores est amet. Nesciunt omnis vero odio pariatur unde eligendi iure? Aliquam minima sit quam iure!</p>
                </div>
                <div className="footer-social">
                    <a href="https://instagram.com"><img src="instagram-icon.png" alt="Instagram" /></a>
                    <a href="https://facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
                    <a href="https://twitter.com"><img src="twitter-icon.png" alt="Twitter" /></a>
                </div>
                <div className="footer-section">
                    <h4>Informação</h4>
                    <ul>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos de Serviço</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Categorias</h4>
                    <ul>
                        <li><a href="#">Categoria 1</a></li>
                        <li><a href="#">Categoria 2</a></li>
                        <li><a href="#">Categoria 3</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <div className="footer-section">
                        <h4>Contato</h4>
                        <p>Endereço: Rua Exemplo, 123</p>
                        <p>Cidade, Estado, CEP</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2024 Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;