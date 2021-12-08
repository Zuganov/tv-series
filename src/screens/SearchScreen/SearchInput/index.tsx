import { TextInput } from '@common/design-system/TextInput'
import { Colors } from '@common/resources/Colors'
import { Icons } from '@common/resources/Icons'
import { SearchContext } from '@screens/SearchScreen/SeachContext'
import React, { useEffect } from 'react'
import { Keyboard, StyleSheet } from 'react-native'

interface SearchInputProps {
  onTextChange: (text: string) => void
  onDebouncedTermChange: (text: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onTextChange,
  onDebouncedTermChange,
}) => {
  const { debouncedTerm, term, setTerm } = SearchContext.useContainer()

  useEffect(() => {
    onDebouncedTermChange(debouncedTerm)
  }, [debouncedTerm])

  const handleEndEditing = () => {
    Keyboard.dismiss()
  }

  const handleTextChange = (text: string) => {
    onTextChange(text)
    setTerm(text)
  }

  return (
    <TextInput
      value={term}
      onChangeText={handleTextChange}
      onEndEditing={handleEndEditing}
      leftElement={<Icons.Search stroke={Colors.GRAPHITE} />}
      placeholder="Search your favorites series"
      style={styles.textInput}
      autoCorrect={false}
      autoFocus
      enablesReturnKeyAutomatically
      returnKeyType="search"
    />
  )
}

const styles = StyleSheet.create({
  textInput: { marginHorizontal: 8, marginBottom: 10 },
})
