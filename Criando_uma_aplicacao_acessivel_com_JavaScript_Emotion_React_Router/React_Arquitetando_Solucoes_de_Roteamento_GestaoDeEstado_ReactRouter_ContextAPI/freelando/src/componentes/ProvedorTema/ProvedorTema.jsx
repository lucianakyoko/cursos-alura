import { ThemeProvider } from '@emotion/react';

const tema = {
  cores: {
    branco: '#FFF',
    atencao: '',
    focus: '#B009FF',
    primarias: {
      a: '#5754ED',
      b: '#D93114',
      c: ''
    },
    secundarias: {
      a: '#EBEAF9',
      b: '',
      c: ''
    },
    neutras: {
      a: '#F8F8FD',
      b: '',
      c: '',
      d: ''
    },
    dark: {
      a: '',
      b: '#B61B00'
    },
  },
  espacamentos: {
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px'
  },
  fontFamily: "'Montserrat', sans-serif"
};

export const ProvedorTema = ({ children }) => {
  return (
    <ThemeProvider theme={tema}>
      {children}
    </ThemeProvider>
  );
}