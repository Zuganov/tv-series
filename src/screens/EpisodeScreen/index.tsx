import { ErrorState } from '@common/components/ErrorState'
import { LoadingState } from '@common/components/LoadingState'
import { Summary } from '@common/components/Summary'
import { Image } from '@common/design-system/Image'
import { Text } from '@common/design-system/Text'
import { fetchHelper } from '@common/helpers/FetchHelper'
import { Config } from '@common/resources/Config'
import { Episode } from '@common/types'
import { HomeStackParamsList } from '@navigation/HomeNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type EpisodeScreenProps = NativeStackScreenProps<HomeStackParamsList, 'Episode'>

export const EpisodeScreen: React.FC<EpisodeScreenProps> = ({ route }) => {
  const { episodeId } = route.params

  const [episode, setEpisode] = useState<Episode | undefined>(undefined)
  const [hasErrorOnLoad, setHasErrorOnLoad] = useState(false)
  const [loading, setLoading] = useState(false)

  const { top } = useSafeAreaInsets()

  useLayoutEffect(() => {
    loadEpisode()

    return () => {
      setEpisode(undefined)
    }
  }, [])

  const loadEpisode = async () => {
    try {
      setLoading(true)
      const data = await fetchHelper<Episode>(
        `${Config.MAZE_API}/episodes/${episodeId}`
      )

      setEpisode(data)
    } catch (error) {
      setHasErrorOnLoad(true)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingState />
  }

  if (!episode && hasErrorOnLoad) {
    return <ErrorState />
  }

  return (
    <ScrollView
      contentContainerStyle={styles.wrapper}
      style={{ marginTop: top }}
    >
      <Image
        source={{ uri: episode?.image?.original }}
        resizeMode="contain"
        style={styles.image}
      />

      <Text variant="title" align="center">
        Season: {episode?.season}
      </Text>

      <Text variant="title" align="center">
        {`${episode?.number}. ${episode?.name}`}
      </Text>

      <Summary text={episode?.summary} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: { paddingVertical: 20, paddingHorizontal: 20 },
  image: {
    width: 300,
    aspectRatio: 1,
    borderRadius: 4,
    alignSelf: 'center',
  },
})
