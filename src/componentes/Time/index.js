import Card from "../Card";
import "./Time.css";

const Time = (props) => {
  return (
    props.personagens.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="personagens">
          {props.personagens.map((personagens) => (
            <Card
              corDeFundo={props.corPrimaria}
              nome={personagens.nome}
              cargo={personagens.cargo}
              imagem={personagens.imagem}
              key={personagens.nome}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
