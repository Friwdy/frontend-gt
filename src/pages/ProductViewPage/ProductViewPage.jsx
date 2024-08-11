import React, { useState } from 'react';
import './styles.css'; // Estilos personalizados
import tenis1 from '../../imagens/product-thumb-1.jpeg';
import tenis2 from '../../imagens/product-thumb-2.jpeg';
import tenis3 from '../../imagens/product-thumb-3.jpeg';
import tenis4 from '../../imagens/product-thumb-4.jpeg';
import tenis5 from '../../imagens/product-thumb-5.jpeg';

const ProductViewPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = [39, 40, 41, 42, 43];
  const colors = ['blue', 'red', 'black', 'purple'];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-page">
      <div className="product-detail">
        <div className="image-section">
          <div className="main-image">
            <img src={tenis1} alt="Produto" />
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail" src={tenis1} alt="Produto" />
            <img className="thumbnail" src={tenis2} alt="Produto" />
            <img className="thumbnail" src={tenis3} alt="Produto" />
            <img className="thumbnail" src={tenis4} alt="Produto" />
            <img className="thumbnail" src={tenis5} alt="Produto" />
          </div>
        </div>
        <div className="details-section">
          <h1 className="product-title">Tênis Nike Revolution 6 Next Nature Masculino</h1>
          <p className="product-subtitle">Casual | Nike | REF:38416711</p>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < 4 ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
            <span className="rating-info">4.7 (90 avaliações)</span>
          </div>
          <p className="price">R$ 219,00</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <div className="size-selection">
            <p className="size-label">Tamanho</p>
            <div className="size-options">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="color-selection">
            <p className="color-label">Cores</p>
            <div className="color-options">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                />
              ))}
            </div>
          </div>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
      <div className="related-products">
        <h2>Produtos Relacionados</h2>
        <div className="cards-container">
          {[tenis1, tenis2, tenis3, tenis4].map((imgSrc, index) => (
            <div className="card" key={index}>
              <img src={imgSrc} alt={`Produto ${index + 1}`} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Produto {index + 1}</h3>
                <p className="card-price">R$ 150,00</p>
                <button className="card-button">Ver Detalhes</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
