import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/sobre" element={ <SobreMim /> } />
        <Route path="*" element={ <div>Página não encontrada</div> } />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
