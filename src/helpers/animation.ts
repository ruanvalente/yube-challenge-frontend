import { keyframes } from 'styled-components'

export function FadeLeft() {
  const fadeLeft = keyframes`
    from {
    opacity: 0;
    transform: translate3d(-60px, 0px, 0);
  }
  to {
    opacity: 1;
    transform: rotate3d(0, 0, 0);
  }
  `
  return fadeLeft
}

export function FadeDown() {
  const fadeDown = keyframes`
    from {
    opacity: 0;
    transform: translate3d(0px, -30px, 0px);
  }
  to {
    opacity: 1;
    transform: rotate3d(0px, 0px, 0px);
  }
  `
  return fadeDown
}

export function Dots() {
  const dots = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
  `

  return dots
}
