import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Conteudo Principal</h2>
        <p>Bem-vindo à minha aplicação React !</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
