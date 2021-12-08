import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens/HomeScreen'
import { Colors } from '@common/resources/Colors'
import { ShowScreen } from '@screens/ShowScreen'
import { EpisodeScreen } from '@screens/EpisodeScreen'

export type HomeStackParamsList = {
  Home: undefined
  Show: { showId: number }
  Episode: { episodeId: number }
}

const Stack = createNativeStackNavigator<HomeStackParamsList>()

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Colors.WHITE },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  )
}
