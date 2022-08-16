import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape"

function App() {
  const times = [
    {
      nome: "Grupo 1",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Grupo 2",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Grupo 3",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Grupo 4",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Grupo 5",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Grupo 6",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Grupo 7",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [personagens, setPersonagens] = useState([]);

  const aoPersonagemCriado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        funcoes={times.map((time) => time.nome)}
        personagemCriado={(personagem) => aoPersonagemCriado(personagem)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          personagens={personagens.filter(
            (personagem) => personagem.time === time.nome
          )}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
