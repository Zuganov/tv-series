import { Text } from '@common/design-system/Text'
import { fetchHelper } from '@common/helpers/FetchHelper'
import { Show } from '@common/types'
import { HomeStackParamsList } from '@navigation/TabNavigator/HomeNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import { CardList } from '@common/components/CardList'
import { ErrorState } from '@common/components/ErrorState'
import Config from 'react-native-config'

type HomeScreenProps = NativeStackScreenProps<HomeStackParamsList, 'Home'>

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [shows, setShows] = useState<Show[]>([])
  const [hasErrorOnLoad, setHasErrorOnLoad] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  const page = useRef<number>(0)

  useEffect(() => {
    loadShows()

    return () => {
      setShows([])
    }
  }, [])

  const loadShows = async () => {
    try {
      setLoading(true)

      const data = await fetchHelper<Show[]>(
        `${Config.MAZE_API}/shows?page=${page.current}`
      )

      page.current++

      setShows([...shows, ...data])
    } catch (error) {
      setHasErrorOnLoad(true)
    } finally {
      setLoading(false)
    }
  }

  const handleEndReached = () => {
    loadShows()
  }

  const renderListHeader = () => {
    return (
      <Text variant="title" style={styles.title}>
        Series
      </Text>
    )
  }

  if (hasErrorOnLoad) {
    return <ErrorState />
  }

  return (
    <CardList
      data={shows}
      ListHeaderComponent={renderListHeader}
      onEndReachedThreshold={0.9}
      onEndReached={handleEndReached}
      loading={loading}
    />
  )
}

const styles = StyleSheet.create({
  title: { marginHorizontal: 8, marginVertical: 10 },
})
