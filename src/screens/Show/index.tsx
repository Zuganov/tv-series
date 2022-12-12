import { ErrorState } from '@common/components/ErrorState'
import { LoadingState } from '@common/components/LoadingState'
import { Text } from '@common/design-system/Text'
import { fetchHelper } from '@common/helpers/FetchHelper'
import { Episode, Show } from '@common/types'
import { HomeStackParamsList } from '@navigation/TabNavigator/HomeNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { EpisodesItem } from '@screens/Show/EpisodeItem'
import { ShowHeader } from '@screens/Show/ShowHeader'
import React, { useLayoutEffect, useState } from 'react'
import { ListRenderItem, StyleSheet, View } from 'react-native'
import Config from 'react-native-config'
import { FlatList } from 'react-native-gesture-handler'

type ShowScreenProps = NativeStackScreenProps<HomeStackParamsList, 'Show'>

export const ShowScreen: React.FC<ShowScreenProps> = ({ route }) => {
  const { showId } = route.params

  const [show, setShow] = useState<Show | undefined>(undefined)
  const [hasErrorOnLoad, setHasErrorOnLoad] = useState(false)
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    loadShow()

    return () => {
      setShow(undefined)
    }
  }, [])

  const loadShow = async () => {
    try {
      setLoading(true)
      const data = await fetchHelper<Show>(
        `${Config.MAZE_API}/shows/${showId}?embed=episodes`
      )

      setShow(data)
    } catch (error) {
      setHasErrorOnLoad(true)
    } finally {
      setLoading(false)
    }
  }

  const renderItem: ListRenderItem<Episode> = ({ item }) => {
    if (item.number === 1) {
      return (
        <View>
          <Text style={styles.seasonTitle}>Season: {item.season}</Text>

          <EpisodesItem episode={item} />
        </View>
      )
    }

    return <EpisodesItem episode={item} />
  }

  const renderShowHeader = () => {
    if (show) {
      return <ShowHeader show={show} />
    }

    return null
  }

  if (loading) {
    return <LoadingState />
  }

  if (!show && hasErrorOnLoad) {
    return <ErrorState />
  }

  return (
    <FlatList
      data={show?._embedded?.episodes || []}
      renderItem={renderItem}
      contentContainerStyle={styles.wrapper}
      ListHeaderComponent={renderShowHeader}
    />
  )
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 20, paddingHorizontal: 20, paddingBottom: 40 },
  seasonTitle: { marginVertical: 8 },
})
