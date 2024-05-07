import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

 const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo='/icones/home-ativo.png'
            iconeInativo='icones/home-inativo.png'
            ativo
          >
            início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo='/icones/mais-vistas-ativo.png'
            iconeInativo='icones/mais-vistas-inativo.png'
            
          >
            Mais vistos
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
}


export default BarraLateral;