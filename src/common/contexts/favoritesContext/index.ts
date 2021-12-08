import { Show } from '@common/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import { AsyncStorageKeys } from '@common/resources/AsyncStorageKeys'

interface ShowDictionary {
  [id: number]: Show
}

const useFavorites = () => {
  const [favoriteShows, setFavoriteShows] = useState<ShowDictionary>({})

  useEffect(() => {
    loadFavorites()

    return () => {
      setFavoriteShows({})
    }
  }, [])

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem(AsyncStorageKeys.FAVORITES)

      if (favorites) {
        setFavoriteShows(JSON.parse(favorites))
      }
    } catch (error) {
      console.log('error on load favorites')
      // send log to somewhere
    }
  }

  const removeFromFavorites = async (show: Show) => {
    try {
      const favoritesDictionary = Object.assign({}, favoriteShows)
      delete favoritesDictionary[show.id]

      setFavoriteShows(favoritesDictionary)

      await AsyncStorage.setItem(
        AsyncStorageKeys.FAVORITES,
        JSON.stringify(favoritesDictionary)
      )
    } catch (error) {
      console.log('error on remove from favorites')
      // send log to somewhere
    }
  }

  const addToFavorites = async (show: Show) => {
    try {
      const favoritesDictionary = { ...favoriteShows, [show.id]: show }

      setFavoriteShows(favoritesDictionary)

      await AsyncStorage.setItem(
        AsyncStorageKeys.FAVORITES,
        JSON.stringify(favoritesDictionary)
      )
    } catch (error) {
      console.log('error on save favorites')
      // send log to somewhere
    }
  }

  return {
    favoriteShows,
    addToFavorites,
    removeFromFavorites,
  }
}

export const FavoritesContext = createContainer(useFavorites)
