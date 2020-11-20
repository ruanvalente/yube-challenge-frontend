import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Profile from '../../../pages/Profile/index'
import { ListArtist, ListTracks } from '../../../pages/Profile/style'

type TestElement = Document | Element | Window | Node

function hasInputValue(element: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === element
}

describe('<Profile />', () => {
  test('should rendering Profile component', () => {
    render(<Profile />)
  })

  test('should input focus', () => {
    const { getByTestId } = render(<Profile />)
    const inputElement = getByTestId('input-profile')
    expect(fireEvent.focus(inputElement)).toBeTruthy()
  })

  test('should render input value', () => {
    const { getByTestId } = render(<Profile />)
    expect(getByTestId('input-profile')).toBeInTheDocument()
  })

  test('should contain input length greater than zero ', () => {
    const { getByTestId } = render(<Profile />)
    const inputElement = getByTestId('input-profile')
    fireEvent.change(inputElement, { target: { value: '123' } })
    expect(hasInputValue(inputElement, '123')).toBeTruthy()
  })
})

describe('<ListArtist />', () => {
  test('should rendering ListArtist component', () => {
    render(<ListArtist />)
  })

})

describe('<ListTracks />', () => {
  test('should rendering ListTracks component', () => {
    render(<ListTracks />)
  })
})
