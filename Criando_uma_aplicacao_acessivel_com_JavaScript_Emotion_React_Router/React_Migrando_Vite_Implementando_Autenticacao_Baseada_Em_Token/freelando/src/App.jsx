import { RouterProvider } from "react-router-dom"
import { Estilos } from "./componentes/EstilosGlobais/Estilos"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import { router } from "./router/router"
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario"

function App () {
  return (<ProvedorTema>
    <Estilos />
    <SessaoUsuarioProvider>
      <RouterProvider router={router} />
    </SessaoUsuarioProvider>
  </ProvedorTema>)
} 

export default App
