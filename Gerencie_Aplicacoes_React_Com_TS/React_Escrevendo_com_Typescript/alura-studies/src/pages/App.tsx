import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from './App.module.scss'
import { ITarefa } from "../types/tarefa";

function App() {
  const[ tarefas, setTarefas] = useState<ITarefa[]>([]);
  const[selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  };

  function finalizarTarefa() { 
    setSelecionado(undefined);
  
    if(selecionado) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa} 
      />
      <Cronometro 
        selecionado={selecionado} 
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
