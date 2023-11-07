import React from "react";

const DeleteProduct = ({ item, excluirProduto }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={() => excluirProduto(item.id)}>Remover produto</button>
    </div>
  );
};

export default DeleteProduct;
