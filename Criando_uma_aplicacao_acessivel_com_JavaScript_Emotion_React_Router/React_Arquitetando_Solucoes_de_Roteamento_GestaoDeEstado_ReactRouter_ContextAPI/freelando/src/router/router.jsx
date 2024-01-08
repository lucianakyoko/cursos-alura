import { createBrowserRouter } from 'react-router-dom';
import PaginaInicial from '../paginas/PaginaInicial';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
    children: [],
  },
]);