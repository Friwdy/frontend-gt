import React, { useState } from 'react';
import './styles.css'; // Estilos personalizados

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
    <div className="product-detail">
      <div className="image-section">
        <div className="main-image">
          {/* Coloque o caminho da imagem principal */}
          <img src="path/to/main-image.jpg" alt="Produto" />
        </div>
        <div className="thumbnail-container">
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={`path/to/thumb${index + 1}.jpg`}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
            />
          ))}
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
  );
};

export default ProductViewPage;