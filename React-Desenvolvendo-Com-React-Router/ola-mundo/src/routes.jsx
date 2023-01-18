import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu/Index';
import PaginaPadrao from './componentes/PaginaPadrao';
import Rodape from './componentes/Rodape';
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
          <Route index element={ <Inicio /> } />
          <Route path="sobre" element={ <SobreMim /> } />
        </Route>
        <Route path="*" element={ <div>Página não encontrada</div> } />
      </Routes>
      <Rodape />
    </BrowserRouter>    
  )
}

