import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FavoritesScreen } from '@screens/Favorites'
import { Colors } from '@common/resources/Colors'
import { ShowScreen } from '@screens/Show'
import { EpisodeScreen } from '@screens/Episode'

export type FavoritesStackParamsList = {
  Favorites: undefined
  Show: { showId: number }
  Episode: { episodeId: number }
}

const Stack = createNativeStackNavigator<FavoritesStackParamsList>()

export const FavoritesStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Colors.WHITE },
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  )
}
