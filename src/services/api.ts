import axios from 'axios'

const token = window.location.hash.replace('#access_token=', '')

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export default api
