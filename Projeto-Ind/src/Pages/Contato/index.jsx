import React from "react";
import "./style.css";
import Header from "../../Components/Header";
import "../../Components/Header/style.css";
import Footer from "../../Components/Footer";

const Contato = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <section className="contato">
        <h1>Contato</h1>
        <hr />
        <p>Tel: 2235-9981</p>
        <p>Whats: 2499325-4426</p>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contato;
