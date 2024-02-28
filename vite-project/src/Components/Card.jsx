import React from "react";

const Card = ({ nombre, animalFavorito }) => {
  return (
    <div className="card">
      <h2>¡Resultado!</h2>
      <p>Nombre y Apellido: {nombre}</p>
      <p>Tu animal favorito es: {animalFavorito}</p>
    </div>
  );
};

export default Card;
