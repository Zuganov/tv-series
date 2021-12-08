import { CardShow } from '@common/components/CardList/CardShow'
import { Colors } from '@common/resources/Colors'
import { Show } from '@common/types'
import { HomeStackParamsList } from '@navigation/TabNavigator/HomeNavigator'
import { NavigationProp, useNavigation } from '@react-navigation/core'
import React, { useCallback } from 'react'
import {
  FlatListProps,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

interface CardListProps extends Omit<FlatListProps<any>, 'renderItem'> {
  loading?: boolean
}

export const CardList: React.FC<CardListProps> = ({
  data,
  ListHeaderComponent,
  loading = false,
  ...props
}) => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamsList>>()

  const handleCardPress = (showId: number) => {
    navigate('Show', { showId })
  }

  const renderShowItem: ListRenderItem<Show> = useCallback(({ item }) => {
    return <CardShow show={item} onPress={handleCardPress} />
  }, [])

  return (
    <FlatList
      {...props}
      data={data}
      renderItem={renderShowItem}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={styles.list}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
      refreshControl={<RefreshControl refreshing={loading} />}
    />
  )
}

const styles = StyleSheet.create({
  list: { paddingTop: 10, backgroundColor: Colors.WHITE },
})
