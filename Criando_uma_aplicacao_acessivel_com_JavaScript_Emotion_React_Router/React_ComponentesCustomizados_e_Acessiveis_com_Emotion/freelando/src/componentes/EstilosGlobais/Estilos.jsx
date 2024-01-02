import { Global, css } from '@emotion/react';

const estilos = css`
  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Estilos = () => {
  return (
    <Global styles={estilos} />
  );
}