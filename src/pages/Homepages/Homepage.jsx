import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import './styles.css';
import image1 from '../../imagens/home-slide-1.jpeg';
import image2 from '../../imagens/home-slide-2.jpeg';
import image3 from '../../imagens/home-slide-3.jpeg';
import image4 from '../../imagens/home-slide-4.jpeg';
import collection1 from '../../imagens/collection-1.png';
import collection2 from '../../imagens/collection-2.png';
import collection3 from '../../imagens/collection-3.png';
import iconShirt from '../../imagens/camiseta.png';
import iconPants from '../../imagens/calca.png';
import iconShorts from '../../imagens/bone.png';
import iconHeadphones from '../../imagens/headphones.png';
import iconShoes from '../../imagens/tenis.png';

const Home = () => {
  return (
    <div className="home">
      <Carousel className="carousel">
        <Carousel.Item>
          <div className="carousel-content">
            <Carousel.Caption>
              <p className="caption-text">
                Melhores ofertas personalizadas
              </p>
              <h3 className="caption-title">
                Queima de estoque Nike
              </h3>
              <p className="caption-description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur
              </p>
              <Button className="caption-button" variant="primary">Ver Ofertas</Button>
            </Carousel.Caption>
          </div>
          <img className="d-block w-100 right-align" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <Carousel.Caption>
              <p className="caption-text">
                Outras ofertas personalizadas
              </p>
              <h3 className="caption-title">
                Promoções de verão
              </h3>
              <p className="caption-description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur
              </p>
              <Button className="caption-button" variant="primary">Ver Ofertas</Button>
            </Carousel.Caption>
          </div>
          <img className="d-block w-100 right-align" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <Carousel.Caption>
              <p className="caption-text">
                Produtos em destaque
              </p>
              <h3 className="caption-title">
                Novidades da estação
              </h3>
              <p className="caption-description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur
              </p>
              <Button className="caption-button" variant="primary">Ver Ofertas</Button>
            </Carousel.Caption>
          </div>
          <img className="d-block w-100 right-align" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <Carousel.Caption>
              <p className="caption-text">
                Novidades incríveis
              </p>
              <h3 className="caption-title">
                Lançamentos exclusivos
              </h3>
              <p className="caption-description">
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur
              </p>
              <Button className="caption-button" variant="primary">Ver Ofertas</Button>
            </Carousel.Caption>
          </div>
          <img className="d-block w-100 right-align" src={image4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
      <div>
        <p className="highlight-collections">Coleções em destaque</p>
      </div>
      <div className="cards-section">
        <div className="card-item1">
        <img src={collection1} alt="Logo" />
          <div>
            <Button className="off1">30% OFF</Button>
            <Button className="comprar1">Comprar</Button>
          </div>
        </div>
        <div className="card-item2">
        <img src={collection2} alt="Logo" />
          <div>
            <Button className="off1">30% OFF</Button>
            <Button className="comprar1">Comprar</Button>
          </div>
        </div>
        <div className="card-item3">
        <img src={collection3} alt="Logo" />
          <div>
            <Button className="off1">30% OFF</Button>
            <Button className="comprar1">Comprar</Button>
          </div>
        </div>
      </div>
      <div className="text">
        <p>Coleções em destaque</p>
      </div>
      <div className="icons-section">
        <div className="icon-item">
          <img src={iconShirt} alt="Camisa" />
          <p>Camisa</p>
        </div>
        <div className="icon-item">
          <img src={iconPants} alt="Calça" />
          <p>Calça</p>
        </div>
        <div className="icon-item">
          <img src={iconShorts} alt="Bermuda" />
          <p>Bermuda</p>
        </div>
        <div className="icon-item">
          <img src={iconHeadphones} alt="Fone" />
          <p>Fone</p>
        </div>
        <div className="icon-item">
          <img src={iconShoes} alt="Tênis" />
          <p>Tênis</p>
        </div>
      </div>

      <div className="more-cards-section">
  <div className="card-row">
    <Card className="card-item">
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
    <Card className="card-item">
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
    <Card className="card-item">
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
    <Card className="card-item">
      <Card.Img variant="top" src={image4} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
  </div>
  <div className="card-row">
    <Card className="card-item">
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
    <Card className="card-item">
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
    <Card className="card-item">
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
    <Card className="card-item">
      <Card.Img variant="top" src={image4} />
      <Card.Body>
        <Button className="discount-button">30% OFF</Button>
        <p className="product-name">Tênis</p>
        <p className="product-model">K-Swiss V8 - Masculino</p>
        <p className="price">
          <span className="old-price">$200</span>
          <span className="new-price">$100</span>
        </p>
      </Card.Body>
    </Card>
  </div>
</div>

    </div>
  );
};

export default Home;
