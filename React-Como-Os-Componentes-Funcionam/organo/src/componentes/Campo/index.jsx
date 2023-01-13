import './Campo.css';

const Campo = (props) => {
  const {
    label,
    placeholder,
    valor,
    aoAlterado,
    obrigatorio=false,
    type= 'text'
  } = props;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };


  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor="">{label}</label>
      <input 
        type={type}
        value={valor} 
        onChange={aoDigitado} 
        required={obrigatorio} 
        placeholder={placeholder} 
      />
    </div>
  );

}

export default Campo;