import { useState } from "react";
import Card from "./Components/Card";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    animalFavorito: "",
  });
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.animalFavorito.length < 4) {
      setErr(true);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Ingresa tu animal favorito:</h1>
        <form onSubmit={handleSubmit}>
          <label>Ingresa tu nombre y apellido:</label>
          <input
            type="text"
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
          />
          <label>Animal: </label>
          <input
            type="text"
            onChange={(e) =>
              setUsuario({ ...usuario, animalFavorito: e.target.value })
            }
          />
          <button>Resultado</button>
        </form>
        {err && <p>¡Error en información!</p>}
      </div>
      <Card nombre={usuario.nombre} animalFavorito={usuario.animalFavorito} />
    </>
  );
}

export default App;
