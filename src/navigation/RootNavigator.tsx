import React, { useEffect } from 'react'
import { TabNavigator, TabNavigatorParamsList } from '@navigation/TabNavigator'
import { NoInternetScreen } from '@screens/NoInternetScreen'
import { InternetStatusContext } from '@common/contexts/InternetStatusContext'
import { NavigatorScreenParams } from '@react-navigation/core'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RNBootSplash from 'react-native-bootsplash'

export type RootParamsList = {
  TabNavigator: NavigatorScreenParams<TabNavigatorParamsList>
  NoInternet: undefined
}

const Stack = createNativeStackNavigator<RootParamsList>()

export const RootNavigator: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])

  return (
    <InternetStatusContext.Provider>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="NoInternet" component={NoInternetScreen} />
      </Stack.Navigator>
    </InternetStatusContext.Provider>
  )
}
