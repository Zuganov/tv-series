import { CardList } from '@common/components/CardList'
import { EmptyListComponent } from '@screens/SearchScreen/EmptyListComponent'
import { ErrorState } from '@common/components/ErrorState'
import { fetchHelper } from '@common/helpers/FetchHelper'
import { Colors } from '@common/resources/Colors'
import { Config } from '@common/resources/Config'
import { Show } from '@common/types'
import { SearchStackParamsList } from '@navigation/SearchNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SearchContext } from '@screens/SearchScreen/SeachContext'
import { SearchInput } from '@screens/SearchScreen/SearchInput'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type SearchScreenProps = NativeStackScreenProps<SearchStackParamsList, 'Search'>
type ShowSearchResponse = { score: number; show: Show }

export const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [shows, setShows] = useState<Show[]>([])
  const [hasErrorOnLoad, setHasErrorOnLoad] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    return () => {
      resetShows()
    }
  }, [])

  const searchShows = async (searchTerm: string) => {
    try {
      setLoading(true)

      const data = await fetchHelper<ShowSearchResponse[]>(
        `${Config.MAZE_API}/search/shows?q=${searchTerm}`
      )

      const showsResponse = data.map((searchResponse) => searchResponse.show)

      setShows(showsResponse)
    } catch (error) {
      setHasErrorOnLoad(true)
    } finally {
      setLoading(false)
    }
  }

  const resetShows = () => {
    setShows([])
  }

  const handleTextChange = (text: string) => {
    if (text.length > 0) {
      setLoading(true)
    }
  }

  const handleDebouncedTermChange = (text: string) => {
    if (text) {
      return searchShows(text)
    }

    setLoading(false)
    resetShows()
  }

  if (hasErrorOnLoad) {
    return <ErrorState />
  }

  return (
    <SearchContext.Provider>
      <SafeAreaView style={styles.wrapper}>
        <SearchInput
          onTextChange={handleTextChange}
          onDebouncedTermChange={handleDebouncedTermChange}
        />

        <CardList
          data={shows}
          loading={loading}
          ListEmptyComponent={<EmptyListComponent loading={loading} />}
        />
      </SafeAreaView>
    </SearchContext.Provider>
  )
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: Colors.WHITE },
  title: { marginHorizontal: 8 },
})
