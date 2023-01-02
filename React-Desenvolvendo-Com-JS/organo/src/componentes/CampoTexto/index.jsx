import './CampoTexto.css';

const CampoTexto = (props) => {
  console.log(props.label)
  return (
    <div className="campo-texto">
      <label htmlFor="">{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );

}

export default CampoTexto;