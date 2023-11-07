import React from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="home">
        <h1>Seja Bem vindo(a) ao nosso site, aqui você encontra tudo </h1>
        <hr />
        <p>Navege pelo menu de navegação no topo do site</p>
        <hr />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
