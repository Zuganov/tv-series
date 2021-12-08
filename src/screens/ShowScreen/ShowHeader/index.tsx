import { Summary } from '@common/components/Summary'
import { FavoritesContext } from '@common/contexts/favoritesContext'
import { Button } from '@common/design-system/Button'
import { Image } from '@common/design-system/Image'
import { Text } from '@common/design-system/Text'
import { Show } from '@common/types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface ShowHeaderProps {
  show: Show
}

export const ShowHeader: React.FC<ShowHeaderProps> = ({ show }) => {
  const { addToFavorites, removeFromFavorites, favoriteShows } =
    FavoritesContext.useContainer()

  const shouldRenderSchedule =
    show?.schedule && show?.schedule.days.length > 0 && !!show?.schedule.time
  const isFavorite = !!favoriteShows[show.id]

  const handleFavoritesPress = () => {
    if (isFavorite) {
      removeFromFavorites(show)
    } else {
      addToFavorites(show)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: show?.image?.original }}
        resizeMode="contain"
        style={styles.image}
      />

      <Text variant="title" align="center">
        {show?.name}
      </Text>

      <Summary text={show?.summary} />

      {show && show.genres.length > 0 && (
        <Text variant="small" style={styles.genres}>
          Genres: {show.genres.join(', ')}
        </Text>
      )}

      {shouldRenderSchedule && (
        <Text variant="small">
          Days: {show?.schedule?.days.join(', ')}
          {'\n'}
          Time: {show?.schedule?.time}
        </Text>
      )}

      <Button
        onPress={handleFavoritesPress}
        variant={isFavorite ? 'secondary' : 'primary'}
        style={styles.favoriteButton}
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </Button>

      {show?._embedded && show?._embedded?.episodes.length > 0 && (
        <Text variant="title" style={styles.episodesHeader}>
          Episodes
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 20 },
  image: {
    width: 300,
    height: 300,
    borderRadius: 4,
    alignSelf: 'center',
  },
  genres: { marginVertical: 8 },
  favoriteButton: { marginVertical: 20 },
  episodesHeader: { marginTop: 20 },
})
