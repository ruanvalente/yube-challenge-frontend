import { Imagens } from "./imagens";

export type Items = {
  external_urls: object
  genres: string[]
  href: string
  id: string
  images: Array<Imagens>
  name: string
  type: string
  uri: string
  album: {
    release_date: string
    images: Array<Imagens>
  }
}
