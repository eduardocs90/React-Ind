import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import relogio1 from "../../Imagem/relogio1.png";
import relogio from "../../Imagem/relogio.png";
import relogio2 from "../../Imagem/relogio2.png";
import "./style.css";
import DeleteProduct from "../../Components/ExcluirProduto";

const Produtos = () => {
  const descRelogio = "Relogio de luxo";
  const descRelogio1 = "Relogio casual";
  const descRelogio2 = "Relogio falso";

  const [novoProduto, setNovoProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");

  const url = "https://65482e6add8ebcd4ab229f62.mockapi.io/produtos";

  const getProdutos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setProdutos(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const adicionar = async () => {
    const product = {
      title: novoProduto,
    };

    try {
      const { data } = await axios.post(url, product);
      console.log(data);
      setProdutos([...produtos, data]);
      setNovoProduto("");
    } catch (err) {
      console.log(err);
    }
  };

  async function excluirProduto(id) {
    console.log("Produto Excluir: " + id);
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);
      const arrayNovo = produtos.filter((item) => item.id != id);
      setProdutos(arrayNovo);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProdutos();
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="body">
        <h1>Lista de Produtos:</h1>
        <div className="produtos">
          <div>
            <img src={relogio} alt="Relogio adiantado" />
            <p>{descRelogio}</p>
          </div>
          <div>
            <img src={relogio1} alt="relogio parado" />
            <p>{descRelogio1}</p>
          </div>
          <div>
            <img src={relogio2} alt="relogio atrasado" />
            <p>{descRelogio2}</p>
          </div>
        </div>
        <hr className="hr" />
      </section>
      <section className="adicionarProduto">
        <h1>Carrinho de Compras:</h1>
        <div>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            value={novoProduto}
            onChange={(e) => setNovoProduto(e.target.value)}
          />
          <button onClick={adicionar}>Adicionar ao carrinho</button>
        </div>
      </section>
      <section className="excluirProduto">
        <h2>Produtos do Carrinho:</h2>
        {produtos.map((item) => (
          <DeleteProduct
            key={item.id}
            item={item}
            excluirProduto={excluirProduto}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Produtos;
