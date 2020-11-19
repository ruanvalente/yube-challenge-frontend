import { Imagens } from "./imagens";

export interface User {
  country: string
  display_name: string
  email: string
  id: string
  uri: string
  images: Array<Imagens>
}
