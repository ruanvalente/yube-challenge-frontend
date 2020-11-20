import React, { useState, useEffect, useRef, FormEvent } from 'react'

import { Link } from 'react-router-dom'

import api from '../../services/api'

import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css'

import { Content, Container, ListArtist, ListTracks, Loading } from './style'

import { User } from '../../types/user'
import { Artist } from '../../types/artist'
import { Tracks } from '../../types/tracks'

import { useLocalStorage } from '../../hooks/useLocalStorage'

import { formatDate } from '../../helpers/formatDate'

import DefaultImage from '../../assets/default-image.jpg'

const Profile: React.FC = () => {
  const myRef = useRef<HTMLInputElement | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [search, setSearch] = useState('')
  const [artist, setArtist] = useState<Artist | null>(null)
  const [tracks, setTracks] = useState<Tracks | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadindPlaylist, setLoadingPlaylist] = useState(false)
  const [playlist, setPlaylist] = useState(() => {
    const storagedPlaylist = localStorage.getItem('@Yube::PlayList')

    if (storagedPlaylist) {
      handleScrollTo()
      return JSON.parse(storagedPlaylist)
    }
    return []
  })

  async function loadUser() {
    try {
      const response = await api.get('/me')
      setUser(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function handlerSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    if (search.length === 0) {
      setError('Por favor, entre com seu artista')
      setArtist(null)
      return
    }

    try {
      setLoading(true)
      const response = await api.get(`/search?q=${search}&type=artist,track`)
      setArtist(response.data.artists)
      setTracks(response.data.tracks)
      setError('')
      setSearch('')
    } catch (error) {
      console.error(error)
      setError('Artista/Música não encontrado')
      setArtist(null)
      setTracks(null)
      setSearch('')
    } finally {
      setLoading(false)
    }
  }

  function handleScrollTo() {
    myRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  function handlerShowPlayList() {
    setLoadingPlaylist(true)
    setArtist(null)
    setTracks(null)
  }

  //eslint-disable-next-line
  function handlerAddPlaylistInLocalStorage(event: any, data: any): void {
    event.preventDefault()
    toast.notify('Opa ! Música adicionada com sucesso à sua playlist 🥰')
    // @ts-ignore
    setPlaylist([
      ...playlist,
      {
        data: {
          images: data.album.images,
          name: data.name,
          release_date: data.album.release_date,
          id: data.id,
        },
      },
    ])
  }

  useEffect(() => {
    localStorage.setItem('@Yube::PlayList', JSON.stringify(playlist))
  }, [playlist])

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <>
      <Container>
        <Content hasError={error}>
          <header>
            <img
              src={user?.images[0].url ? user.images[0].url : DefaultImage}
              alt={user?.display_name ? user.display_name : 'Desconhecido'}
            />
            <div>
              <strong>
                {user?.display_name ? user.display_name : 'Desconhecido'}
              </strong>
            </div>
          </header>
          <form onSubmit={handlerSearch}>
            <input
              data-testid="input-profile"
              type="text"
              placeholder="Digite sua música/artista"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>

          {error && <span>{error}</span>}
          {loading && (
            <Loading>
              <span />
              <span />
              <span />
              <span />
            </Loading>
          )}

          <ListArtist>
            {artist?.items.map(item => (
              <Link to="/profile" key={item.id} onClick={handleScrollTo}>
                <img
                  src={item.images[0]?.url ? item.images[0].url : DefaultImage}
                  alt={item?.name ? item.name : 'Desconhecido'}
                />
                <div>
                  <strong>{item.name}</strong>
                  <p>Artista</p>
                </div>
              </Link>
            ))}
          </ListArtist>

          <ListTracks ref={myRef}>
            {!tracks ? (
              <h2>Sua playlist</h2>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Músicas</h2>
                <button
                  onClick={() => handlerShowPlayList()}
                  style={{
                    maxWidth: '200px',
                    height: '72px',
                    fontSize: '14px',
                    borderRadius: '4px',
                  }}
                >
                  Carregar playlist
                </button>
              </div>
            )}

            {tracks?.items.map(item => (
              <div key={item.id}>
                <a
                  href={`https://open.spotify.com/track/${item.id}`}
                  target="_blank"
                >
                  <img
                    src={
                      item.album.images[0].url
                        ? item.album.images[0].url
                        : DefaultImage
                    }
                    alt={item?.name ? item.name : 'Desconhecido'}
                  />
                  <section>
                    <strong>{item.name}</strong>
                    <p>{formatDate(item.album.release_date)}</p>
                  </section>
                </a>

                <div>
                  <button
                    onClick={(event: any) =>
                      handlerAddPlaylistInLocalStorage(event, item)
                    }
                  >
                    Adicionar a playlist
                  </button>
                </div>
              </div>
            ))}
          </ListTracks>
          <ListTracks>
            {(!tracks?.items || loadindPlaylist) &&
              playlist
                .map(({ data }: any, index: number) => (
                  <div key={index}>
                    <a
                      href={`https://open.spotify.com/track/${data.id}`}
                      target="_blank"
                    >
                      <img
                        src={
                          data.images[0].url ? data.images[0].url : DefaultImage
                        }
                        alt={data.name ? data.name : 'Desconhecido'}
                      />
                      <section>
                        <strong>{data.name}</strong>
                        <p>{formatDate(data.release_date)}</p>
                      </section>
                    </a>
                  </div>
                ))
                .reverse()}
          </ListTracks>
        </Content>
      </Container>
    </>
  )
}

export default Profile
