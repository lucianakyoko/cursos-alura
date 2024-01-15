import { createBrowserRouter } from "react-router-dom"
import Concluido from "../paginas/cadastro/Concluido";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Interesses from "../paginas/cadastro/Interesses";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBase from "../paginas/LayoutBase";
import PaginaInicial from "../paginas/PaginaInicial/PaginaInicial";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path: "",
                element: <PaginaInicial />
            },
            {
                path:'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },
]);