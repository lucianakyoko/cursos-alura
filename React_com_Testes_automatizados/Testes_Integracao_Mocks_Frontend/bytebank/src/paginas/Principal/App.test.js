import { render, screen } from '@testing-library/react';
import userEvent from'@testing-library/user-event';
import App from './App';
import AppRoutes from '../../routes';

import { BrowserRouter } from 'react-router-dom';

describe('Componente <App />', () => {
  test('Deve permitir adicionar uma transação em Extrato', () => { 
    render(<App />, {wrapper: BrowserRouter})  ;
    
    const select = screen.getByRole('combobox');
    const campoValor = screen.getByPlaceholderText('Digite um valor');
    const botao = screen.getByRole('button');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(campoValor, '100');
    userEvent.click(botao);

    const novaTransacao = screen.getByTestId('lista-transacoes');
    const itemExtrato = screen.getByRole('listitem');

    expect(novaTransacao).toContainElement(itemExtrato);
  });

  test('Deve navegar até a página correspondente ao link clicado', async () => { 
    render(<AppRoutes />, {wrapper: BrowserRouter});

    const linkPaginaCartoes = screen.getByText('Cartões');
    expect(linkPaginaCartoes).toBeInTheDocument();

    userEvent.click(linkPaginaCartoes);

    const tituloPaginaCartoes = await screen.findByText('Meus cartões');
    expect(tituloPaginaCartoes).toBeInTheDocument();
  });

  test('Deve navegar até a página correspondente ao link clicado', async () => { 
    render(<AppRoutes/>, { wrapper: BrowserRouter})  ;

    const linkPaginaDeInvestimentos = screen.getByText('Investimentos');
    expect(linkPaginaDeInvestimentos).toBeInTheDocument();

    userEvent.click(linkPaginaDeInvestimentos);

    const tituloPaginaInvestimentos = await screen.findByText('Renda Fixa');
    expect(tituloPaginaInvestimentos);
  });
});
