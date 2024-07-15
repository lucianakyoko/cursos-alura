import { Route, Routes } from 'react-router-dom';
import Cartoes from './componentes/Cartoes';
import Investimentos from './componentes/Investimentos';
import Servicos from './componentes/Servicos';
import Pagina404 from './paginas/Pagina404';
import App from './paginas/Principal/App';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cartoes" element={<Cartoes />} />
        <Route path="investimentos" element={<Investimentos />} />
        <Route path="servicos" element={<Servicos />} />
      </Route>
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  );
}
