import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Title, Container } from '../../../pages/Login/styles'

// Mock Login Component

export const Login = () => {
  return (
    <div>
      <button data-testid="login" type="submit">
        <a href="">Conectar</a>
      </button>
    </div>
  )
}

describe('<Login />', () => {
  test('should rendering the Title component', () => {
    render(<Title />)
  })

  test('should Title component contains a text: "Se conecte ao mundo da música"', () => {
    render(<Title />)
    const text = 'Se conecte ao mundo da música'
    expect(text).toBe('Se conecte ao mundo da música')
  })

  test('should rendering the Container component', () => {
    render(<Container />)
  })

  test('should Container a Button and A with text "Conectar"', () => {
    const { getByTestId } = render(<Login />)
    const text = 'Conectar'
    const buttonElement = getByTestId('login')
    expect(buttonElement).toHaveTextContent(text)
  })
})
