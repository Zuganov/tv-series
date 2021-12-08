import { CardList } from '@common/components/CardList'
import { FavoritesContext } from '@common/contexts/FavoritesContext'
import { Text } from '@common/design-system/Text'
import { HomeStackParamsList } from '@navigation/TabNavigator/HomeNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'

type FavoritesScreenProps = NativeStackScreenProps<HomeStackParamsList, 'Home'>

export const FavoritesScreen: React.FC<FavoritesScreenProps> = () => {
  const { favoriteShows } = FavoritesContext.useContainer()

  const renderListHeader = () => {
    return (
      <Text variant="title" style={styles.title}>
        Your favorites
      </Text>
    )
  }

  const transformShows = () => {
    const shows = Object.values(favoriteShows).map((value) => value)

    if (shows.length === 0) {
      return []
    }

    return shows.sort((a, b) => a.name.localeCompare(b.name))
  }

  const shows = transformShows()

  return <CardList data={shows} ListHeaderComponent={renderListHeader} />
}

const styles = StyleSheet.create({
  title: { marginHorizontal: 8, marginVertical: 10 },
})
