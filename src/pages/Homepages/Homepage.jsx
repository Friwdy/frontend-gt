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
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <p>Melhores ofertas personalizadas</p>
            <h3>Queima de estoque Nike</h3>
            <Button variant="primary">Ver Ofertas</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>

      <div className="cards-section">
        <Card className="card-item">
          <Card.Img variant="top" src={collection1} />
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>Descrição do Card 1</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Img variant="top" src={collection2} />
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>Descrição do Card 2</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Img variant="top" src={collection3} />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>Descrição do Card 3</Card.Text>
          </Card.Body>
        </Card>
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
              <Card.Title>Card 4</Card.Title>
              <Card.Text>Descrição do Card 4</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-item">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>Descrição do Card 5</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-item">
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Card 6</Card.Title>
              <Card.Text>Descrição do Card 6</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-item">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Card 7</Card.Title>
              <Card.Text>Descrição do Card 7</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card-row">
          <Card className="card-item">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Card 8</Card.Title>
              <Card.Text>Descrição do Card 8</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-item">
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Card 9</Card.Title>
              <Card.Text>Descrição do Card 9</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-item">
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Card 10</Card.Title>
              <Card.Text>Descrição do Card 10</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-item">
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Card 11</Card.Title>
              <Card.Text>Descrição do Card 11</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;