import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Componente Layout', () => {
  it('deve renderizar children', () => {
    const { getByText } = render(<Layout>Teste</Layout>)
    expect(getByText('Teste')).toBeInTheDocument()
  })
})
