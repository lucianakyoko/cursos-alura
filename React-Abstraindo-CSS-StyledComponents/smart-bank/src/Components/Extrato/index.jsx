import { Box, Botao } from '../UI';
import { extratoLista } from '../../info';
import Items from '../Items';

export const Extrato = () => {
  return (
    <Box>
      {
        extratoLista.updates.map(({id, type, from, value, date}) => (
          <Items key={id} type={type} from={from} value={value} date={date} />          
        ))
      }

      <Botao>Ver mais</Botao>
    </Box>
  );
}

