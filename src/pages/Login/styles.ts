import styled from 'styled-components'
import { shade } from 'polished'

import { FadeDown } from '../../helpers/animation'

export const Title = styled.h1`
  max-width: 433px;

  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 40px;
  animation: ${FadeDown} 1s forwards;

`

export const Container = styled.div`
  display: flex;
  margin-top: 40px;
  max-width: 700px;
  animation: ${FadeDown} 1s forwards;

  button {
    max-width: 200px;
    width: 100vh;
    background: #ffc100;
    border: none;
    border-radius: 4px;
    color: #3a3a3a;
    height: 70px;
    transition: background-color 1s;
    font-weight: bold;

    a {
      padding: 20px 60px;
    }

    &:hover {
      background-color: ${shade(0.2, '#ffc100')};
    }
  }
`
