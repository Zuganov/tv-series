import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

interface LoadingStateProps {
  size?: 'large' | 'small'
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  size = 'large',
}) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: 'center' },
})
