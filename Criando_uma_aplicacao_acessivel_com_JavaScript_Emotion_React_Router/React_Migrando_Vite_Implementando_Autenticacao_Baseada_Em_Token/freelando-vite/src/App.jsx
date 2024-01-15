import { RouterProvider } from "react-router-dom"
import { Estilos } from "./componentes/EstilosGlobais/Estilos"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import { router } from "./router/router"

function App () {
  return (<ProvedorTema>
    <Estilos />
    <RouterProvider router={router} />
  </ProvedorTema>)
} 

export default App
