import { useState } from 'react'

type initialValueTypes = string | Array<any> | Object | number

export const useLocalStorage = (key: string, initialValue: initialValueTypes) => {
  const [storedValue, setStoredValue] = useState(initialValue)

  const setValue = (value: any) => {
    window.localStorage.setItem(key, value)
    setStoredValue(value)
  }

  return [storedValue, setValue]
}
