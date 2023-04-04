import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Favoritos from './pages/Favoritos';
import Container from './components/Container';
import Cabecalho from '@/components/Cabecalho';
import Rodape from '@/components/Rodape';
 
function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path='/' element={ <Inicio /> } />
          <Route path='/favoritos' element={ <Favoritos /> } />
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;