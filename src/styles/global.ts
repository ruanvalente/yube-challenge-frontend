import { createGlobalStyle } from 'styled-components'

import BackgroundImage from '../assets/music.svg'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

body, html {
  height: 100vh;
}
  body {
    background: #ffecb3 url(${BackgroundImage}) no-repeat 80% top;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  h2 {
    font-size: 2rem;
  }

  a {
      text-decoration: none;
      color: #3a3a3a;
  }
`
