import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { FadeLeft, Dots } from '../../helpers/animation'

interface InputProps {
  hasError: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
  animation: ${FadeLeft} 1s forwards;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;

      @media (max-width: 550px) {
        & {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
    }
    div {
      margin-left: 30px;

      strong {
        font-size: 1.5rem;
        line-height: 42px;
        color: #3d3d4d;

        @media (max-width: 600px) {
          & {
            font-size: 1rem;
          }
        }
      }
    }
  }

  form {
    display: flex;
    margin-top: 40px;
    max-width: 700px;

    input {
      height: 70px;
      padding: 0 24px;
      border: 2px solid #fff;
      border-right: 0;
      border-radius: 5px 0px 0px 5px;
      color: #3a3a3a;
      transition: all 0.2s;

      &:focus {
        border-color: #3a3a3a;
      }

      ${props =>
        props.hasError &&
        css`
          border-color: #ffc100;
        `}

      @media (max-width: 600px) {
        & {
          flex: 1;
        }
      }
    }

    button {
      max-width: 100vh;
      width: 120px;
      background: #ffc100;
      border: none;
      border-radius: 0px 5px 5px 0px;
      color: #3a3a3a;
      height: 70px;
      transition: background-color 1s;
      font-weight: bold;

      &:hover {
        background-color: ${shade(0.2, '#ffc100')};
      }
    }
  }

  span {
    margin-top: 20px;
    font-weight: bold;
    color: #3a3a3a;
    animation: ${FadeLeft} 1s forwards;
  }
`

export const ListArtist = styled.div`
  margin-top: 80px;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 550px) {
    & {
      grid-template-columns: none;
    }
  }

  a {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;
    animation: ${FadeLeft} 1s forwards;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      strong {
        font-size: 16px;
        color: #3d3d4d;
        line-height: 28px;
      }
      p {
        font-size: 14px;
        color: #a8a8b3;
        line-height: 21px;
      }
    }
  }
`

export const ListTracks = styled.div`
  margin-top: 80px;
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    section {
      margin: 0 16px;
      strong {
        font-size: 16px;
        color: #3d3d4d;
        line-height: 28px;
      }
      p {
        font-size: 14px;
        color: #a8a8b3;
        line-height: 21px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;

    button {
      max-width: 100vw;
      width: 120px;
      background: #ffc100;
      border: none;
      border-radius: 0px 5px 5px 0px;
      color: #3a3a3a;
      height: 110px;
      transition: background-color 1s;
      font-weight: bold;

      @media(max-width: 600px) {
        & {
          width: 100%;
          height: 70px;
          margin-top: 10px;
          border-radius: 4px;
        }
      }

      &:hover {
        background-color: ${shade(0.2, '#ffc100')};
      }
    }
    @media (max-width: 600px) {
      & {
        display: block;
      }
    }
  }
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #ffc100;
    margin: 4px;
    animation: ${Dots} 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }

    &:nth-child(4) {
      animation-delay: 0.4s;
    }
  }
`
