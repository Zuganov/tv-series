import { Text } from '@common/design-system/Text'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const ErrorState: React.FC = () => {
  return (
    <View style={styles.error}>
      <Text>An error occuried, please try again later</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  error: { flex: 1, justifyContent: 'center' },
})
