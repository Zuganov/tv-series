import React from 'react'
import { render } from '@testing-library/react-native'
import { SearchScreen } from '@screens/SearchScreen'
import { MockedNavigation, navigationMock } from '../../../jest/helper'
import { CardShow } from '@common/components/CardList/CardShow'

describe('SearchScreen tests', () => {
  it('it should have 0 CardShow on start', () => {
    const { UNSAFE_queryAllByType } = render(
      <MockedNavigation>
        <SearchScreen
          navigation={navigationMock}
          route={{ key: '1', name: 'Search' }}
        >
          Test
        </SearchScreen>
      </MockedNavigation>
    )

    const cardShowQuantity = UNSAFE_queryAllByType(CardShow)

    expect(cardShowQuantity).toHaveLength(0)
  })
})
