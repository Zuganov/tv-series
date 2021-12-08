import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from '@navigation/HomeNavigator'
import { Icons } from '@common/resources/Icons'
import { FavoritesStack } from '@navigation/FavoritesNavigator'
import { SearchStack } from '@navigation/SearchNavigator'
import { FavoritesContext } from '@common/contexts/favoritesContext'

type RootTabParamsList = {
  HomeStack: undefined
  FavoritesStack: undefined
  SearchStack: undefined
}

const Tab = createBottomTabNavigator<RootTabParamsList>()

export const RootNavigator: React.FC = () => {
  return (
    <FavoritesContext.Provider>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icons.Home stroke={color} />
            },
            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name="FavoritesStack"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icons.Favorites fill={color} />
            },
            tabBarShowLabel: false,
          }}
        />

        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            tabBarIcon: ({ color }) => {
              return <Icons.Search stroke={color} />
            },
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </FavoritesContext.Provider>
  )
}
