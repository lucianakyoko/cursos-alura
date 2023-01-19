import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu/Index';
import PaginaPadrao from './componentes/PaginaPadrao';
import Rodape from './componentes/Rodape';
import Inicio from "./paginas/Inicio";
import NaoEncontrada from './paginas/NaoEncontrada';
import Post from './paginas/Post';
import SobreMim from "./paginas/SobreMim";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
          <Route index element={ <Inicio /> } />
          <Route path="sobre" element={ <SobreMim /> } />
          <Route path='posts/:id' element={ <Post /> } />
        </Route>
        <Route path="*" element={ <NaoEncontrada /> } />
      </Routes>
      <Rodape />
    </BrowserRouter>    
  )
}

