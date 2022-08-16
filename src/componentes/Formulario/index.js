import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const OnSave = (e) => {
    e.preventDefault();
    props.personagemCriado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    setNome('')
    setCargo('')
    setCargo('')
    setImagem('')
  };

  return (
    <section className="formulario">
      <form onSubmit={OnSave}>
        <h2>Preecha os dados para criar os cards</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(e) => setNome(e)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={(e) => setCargo(e)}
        />
        <CampoTexto
          obrigatorio={false}
          label="Imagem"
          placeholder="Digite o endereço da sua Imagem"
          valor={imagem}
          aoAlterar={(e) => setImagem(e)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Funções"
          itens={props.funcoes}
          valor={time}
          aoAlterar={(e) => setTime(e)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
