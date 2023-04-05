import { createContext, useContext, useState } from 'react';

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({children}) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider
      value={{favorito, setFavorito}}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const {favorito, setFavorito} = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
    let novaLista = [...favorito];

    if(!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }
    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);

    return setFavorito(novaLista);
  }

  return {
    favorito,
    adicionarFavorito
  }
}