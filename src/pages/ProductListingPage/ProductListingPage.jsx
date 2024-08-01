import React from 'react';
import './styles.css';
import tenis1 from '../../imagens/produc-image-1.jpeg';
import tenis2 from '../../imagens/produc-image-2.jpeg';
import tenis3 from '../../imagens/produc-image-3.jpeg';
// Importe mais imagens conforme necessário

const ProductListingPage = () => {
  return (
    <div className="produto-page">
      <aside className="filtro">
        <h2>Filtro</h2>
        <div className="filtro-item">
          <h3>Marca</h3>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Marca 1
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Marca 2
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Marca 3
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Marca 4
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Marca 5
          </label>
        </div>
        <div className="filtro-item">
          <h3>Categoria</h3>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Categoria 1
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Categoria 2
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Categoria 3
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Categoria 4
          </label>
        </div>
        <div className="filtro-item">
          <h3>Gênero</h3>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Masculino
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Feminino
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Unissex
          </label>
        </div>
        <div className="filtro-item">
          <h3>Estado</h3>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Novo
          </label>
          <label>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Usado
          </label>
        </div>
      </aside>
      <main className="resultado">
        <div className="resultado-header">
          <h2>Resultado para Tênis - 389 tênis</h2>
          <div className="ordenar-por">
            Ordenar por: Mais relevantes <span className="seta">&#9660;</span>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={tenis1} alt="Tênis 1" />
            <div className="descricao">
              <h3>Tênis 1</h3>
              <p>Descrição do Tênis 1</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis2} alt="Tênis 2" />
            <div className="descricao">
              <h3>Tênis 2</h3>
              <p>Descrição do Tênis 2</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis3} alt="Tênis 3" />
            <div className="descricao">
              <h3>Tênis 3</h3>
              <p>Descrição do Tênis 3</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis1} alt="Tênis 4" />
            <div className="descricao">
              <h3>Tênis 4</h3>
              <p>Descrição do Tênis 4</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis2} alt="Tênis 5" />
            <div className="descricao">
              <h3>Tênis 5</h3>
              <p>Descrição do Tênis 5</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis3} alt="Tênis 6" />
            <div className="descricao">
              <h3>Tênis 6</h3>
              <p>Descrição do Tênis 6</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis1} alt="Tênis 7" />
            <div className="descricao">
              <h3>Tênis 7</h3>
              <p>Descrição do Tênis 7</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis2} alt="Tênis 8" />
            <div className="descricao">
              <h3>Tênis 8</h3>
              <p>Descrição do Tênis 8</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis3} alt="Tênis 9" />
            <div className="descricao">
              <h3>Tênis 9</h3>
              <p>Descrição do Tênis 9</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis1} alt="Tênis 10" />
            <div className="descricao">
              <h3>Tênis 10</h3>
              <p>Descrição do Tênis 10</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis2} alt="Tênis 11" />
            <div className="descricao">
              <h3>Tênis 11</h3>
              <p>Descrição do Tênis 11</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis3} alt="Tênis 12" />
            <div className="descricao">
              <h3>Tênis 12</h3>
              <p>Descrição do Tênis 12</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis1} alt="Tênis 13" />
            <div className="descricao">
              <h3>Tênis 13</h3>
              <p>Descrição do Tênis 13</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis2} alt="Tênis 14" />
            <div className="descricao">
              <h3>Tênis 14</h3>
              <p>Descrição do Tênis 14</p>
            </div>
          </div>
          <div className="card">
            <img src={tenis3} alt="Tênis 15" />
            <div className="descricao">
              <h3>Tênis 15</h3>
              <p>Descrição do Tênis 15</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListingPage;