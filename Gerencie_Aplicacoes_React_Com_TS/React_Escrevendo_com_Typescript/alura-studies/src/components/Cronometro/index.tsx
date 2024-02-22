import { useState } from 'react';
import Botao from '../Botao';
import Relogio from './Relogio';

import style from './Cronometro.module.scss';
import { ITarefa } from '../../types/tarefa';
import { tempoParaSegundos } from '../../common/utils/time';

interface Props {
  selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado}: Props) {
  const [tempo, setTempo] = useState<number>();
  if(selecionado?.tempo) {
    tempoParaSegundos(selecionado?.tempo);
    setTempo(tempoParaSegundos(selecionado?.tempo));
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o cronômetro
        Tempo: {tempo}
      </p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}