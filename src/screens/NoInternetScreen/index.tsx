import { Text } from '@common/design-system/Text'
import { HomeStackParamsList } from '@navigation/TabNavigator/HomeNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type NoInternetScreenProps = NativeStackScreenProps<HomeStackParamsList, 'Home'>

export const NoInternetScreen: React.FC<NoInternetScreenProps> = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>No internet</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
