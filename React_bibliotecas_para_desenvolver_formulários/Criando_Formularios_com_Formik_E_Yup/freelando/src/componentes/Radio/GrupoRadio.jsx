import { useFormikContext } from "formik";
import Radio from "./Radio";

const GrupoRadio = ({ opcoes }) => {
  const {values} = useFormikContext()
  return (
    <div>
      {opcoes.map((option) => (
        <Radio
          key={option.valor}
          value={option.label}
          label={option.label}
          checked={option.label === values.interesse}
          name={'interesse'}
        />
      ))}
    </div>
  );
};

export default GrupoRadio;