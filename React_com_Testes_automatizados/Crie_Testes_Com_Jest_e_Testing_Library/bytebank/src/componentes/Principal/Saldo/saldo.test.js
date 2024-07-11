import { render, screen } from '@testing-library/react'
import Saldo from './index'

describe('Componente <Saldo />', () => {
  test('Deve renderizar saldo com valor monetário', () => { 
    render(<Saldo saldo={1000}/>)
    const saldo = screen.getByTestId('saldo');
    expect(saldo).toHaveTextContent('R$ 1000')
   })
})