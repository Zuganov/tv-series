import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { CardShow } from '@common/components/CardList/CardShow'
import { Show } from '@common/types'

const testId = 'test'
const CARD_SHOW_MOCK = {
  id: 1,
  genres: [],
  image: { original: '', medium: '' },
  name: 'Test',
  schedule: undefined,
  summary: '',
} as Show
const mockFn = jest.fn()

describe('CardShow tests', () => {
  it('should be pressable', () => {
    const { getByTestId } = render(
      <CardShow show={CARD_SHOW_MOCK} onPress={mockFn} testID={testId} />
    )

    const cardInstance = getByTestId(testId)
    fireEvent.press(cardInstance)

    expect(mockFn).toBeCalled()
  })
})
