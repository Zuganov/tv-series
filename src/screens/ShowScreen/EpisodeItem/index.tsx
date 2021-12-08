import { Text } from '@common/design-system/Text'
import { Colors } from '@common/resources/Colors'
import { Episode } from '@common/types'
import { HomeStackParamsList } from '@navigation/HomeNavigator'
import { NavigationProp, useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface EpisodeItemProps {
  episode: Episode
}

export const EpisodesItem: React.FC<EpisodeItemProps> = ({ episode }) => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamsList>>()

  const handleEpisodePress = () => {
    navigate('Episode', { episodeId: episode.id })
  }

  return (
    <TouchableOpacity onPress={handleEpisodePress} style={styles.wrapper}>
      <Text>{`${episode.number}. ${episode.name}`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.LIGHT_BLUE,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    marginBottom: 8,
  },
})
