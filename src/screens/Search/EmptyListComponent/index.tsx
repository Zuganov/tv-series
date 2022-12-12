import { Image } from '@common/design-system/Image'
import { Text } from '@common/design-system/Text'
import { IMAGES } from '@common/resources/Images'
import { SearchContext } from '@screens/Search/SeachContext'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface EmptyListComponentProps {
  loading: boolean
}

export const EmptyListComponent: React.FC<EmptyListComponentProps> = ({
  loading,
}) => {
  const { term } = SearchContext.useContainer()

  if (term.length === 0 || loading) {
    return null
  }

  return (
    <View style={styles.wrapper}>
      <Image source={IMAGES.BrokenTV} />

      <Text>We couldn't found result :(</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
