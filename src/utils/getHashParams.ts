import { Location } from '../types/location'

export function getHashParams(location: Location) {
  const hashParams: { [key: string]: string } = {}
  let e: string[] | null,
    regex = /([^&;=]+)=?([^&;]*)/g,
    queryString = location.hash.substring(1)
  e = regex.exec(queryString)
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2])
    e = regex.exec(queryString)
  }
  return hashParams
}
