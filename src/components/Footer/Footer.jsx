import React from 'react';
import './styles.css';
import facebook from '../../imagens/facebook.png'
import instagram from '../../imagens/instagram.png'
import twitter from '../../imagens/twitter.png'
import logofooter from '../../imagens/logo-footer.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul>
                    <div className="logo-footer">
                        <img src={logofooter} alt="logo-footer" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="redes-sociais">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
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
            <div className="footer-divider">

            </div>
            <div className="footer-copyright">
                &copy; 2022 Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;