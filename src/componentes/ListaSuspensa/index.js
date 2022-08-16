import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        onChange={(e) => props.aoAlterar(e.target.value)}
        value={props.valor}
      >
        <option value={''}></option>
        {props.itens.map((x) => {
          return <option key={x}>{x}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
