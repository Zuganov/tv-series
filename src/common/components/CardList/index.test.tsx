import React from 'react'
import { render } from '@testing-library/react-native'
import { CardList } from '@common/components/CardList'
import { CardShow } from '@common/components/CardList/CardShow'
import { MockedNavigation } from '../../../../jest/helper'
import { Show } from '@common/types'
import { RefreshControl } from 'react-native'

const testId = 'test'
const CARD_LIST_MOCK = [
  {
    id: 1,
    genres: [],
    image: { original: '', medium: '' },
    name: 'Test',
    schedule: undefined,
    summary: '',
  },
] as Show[]

describe('CardList tests', () => {
  it('should render empty list', () => {
    const { UNSAFE_queryAllByType } = render(
      <MockedNavigation>
        <CardList data={[]} testID={testId} />
      </MockedNavigation>
    )

    const cardShowQuantity = UNSAFE_queryAllByType(CardShow)

    expect(cardShowQuantity).toHaveLength(0)
  })

  it('should render 1 result', () => {
    const { queryByText } = render(
      <MockedNavigation>
        <CardList data={CARD_LIST_MOCK} testID={testId} />
      </MockedNavigation>
    )

    const cardShowInstance = queryByText('Test')

    expect(cardShowInstance).toBeTruthy()
  })

  it('should render refresh control when loading', () => {
    const { UNSAFE_getByType } = render(
      <MockedNavigation>
        <CardList data={CARD_LIST_MOCK} testID={testId} loading={true} />
      </MockedNavigation>
    )

    const loadingInstance = UNSAFE_getByType(RefreshControl)

    expect(loadingInstance).toBeTruthy()
  })
})
