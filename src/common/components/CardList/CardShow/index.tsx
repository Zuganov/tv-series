import { Text } from '@common/design-system/Text'
import { Image } from '@common/design-system/Image'
import { ScreenDimensions } from '@common/helpers/ScreenHelper'
import { Colors } from '@common/resources/Colors'
import { Show } from '@common/types'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface CardShowProps {
  show: Show
  onPress: (showId: number) => void
  testID?: string
}

export const CardShow: React.FC<CardShowProps> = React.memo(
  ({ show, onPress, testID }) => {
    const handlePress = () => {
      onPress(show.id)
    }

    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={handlePress}
        testID={testID}
      >
        <Image
          source={{ uri: show.image?.medium }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text
          numberOfLines={2}
          style={styles.name}
          ellipsizeMode="tail"
          color={Colors.GRAPHITE}
        >
          {show.name}
        </Text>
      </TouchableOpacity>
    )
  }
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: Colors.LIGHT_BLUE,
    flexBasis: ScreenDimensions.width / 2 - 16,
    alignItems: 'center',
    marginHorizontal: 8,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 4,
  },
  image: {
    width: 60,
    height: 80,
    marginRight: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  name: { flex: -1, marginRight: 10 },
})
