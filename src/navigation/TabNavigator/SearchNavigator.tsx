import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Colors } from '@common/resources/Colors'
import { SearchScreen } from '@screens/Search'
import { ShowScreen } from '@screens/Show'
import { EpisodeScreen } from '@screens/Episode'

export type SearchStackParamsList = {
  Search: undefined
  Show: { showId: number }
  Episode: { episodeId: number }
}

const Stack = createNativeStackNavigator<SearchStackParamsList>()

export const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Colors.WHITE },
      }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  )
}
