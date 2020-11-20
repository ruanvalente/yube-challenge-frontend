import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Container } from './styles'

const Login: React.FC = () => {
  return (
    <>
      <h2>
        <Link to="/">Yube | Challenge</Link>
      </h2>
      <Title>Se conecte ao mundo da música</Title>

      <Container>
        <button data-testid="login" type="submit">
          <a
            href={
              process.env.REACT_APP_AUTH_API_URL ||
              'http://localhost:8888/login'
            }
            rel="nooper noreferrer"
          >
            Conectar
          </a>
        </button>
      </Container>
    </>
  )
}

export default Login
