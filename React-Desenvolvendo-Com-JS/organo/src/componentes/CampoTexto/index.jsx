import './CampoTexto.css';

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );

}

export default CampoTexto;