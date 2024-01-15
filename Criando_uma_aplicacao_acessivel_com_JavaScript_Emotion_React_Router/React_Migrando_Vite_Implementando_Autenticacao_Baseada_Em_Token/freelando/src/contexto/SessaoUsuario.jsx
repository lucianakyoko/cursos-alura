import { Children, createContext, useContext } from "react";

const SessaoUsuarioContext = createContext({
  usuarioEstaLogado: false,
  login: () => null,
  logout: () => null,
  perfil: {}
});

export const useContextUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
};

export const SessaoUsuarioProvider = ({ children }) => {
  const value = {};
  return(
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};