import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <Tipografia variante='h1' componente='h1'>Crie seu cadastro</Tipografia>
        <Tipografia variante='body' componente='body'>
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo='Nome Completo'/>
      </Card>
    </ProvedorTema>
  );
}

export default App;
