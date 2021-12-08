import React from 'react'
import { render } from '@testing-library/react-native'
import { Colors } from '@common/resources/Colors'
import { Text } from '@common/design-system/Text'
import { Fonts } from '@common/resources/Fonts'

const testId = 'test'

describe('Text tests', () => {
  it('it should render regular as default variant', () => {
    const { getByTestId } = render(<Text testID={testId}>Test</Text>)

    const textInstance = getByTestId(testId)
    const expectedStyle = [
      {
        fontFamily: Fonts.PoppinsRegular,
        fontSize: 14,
        lineHeight: 16,
      },
      { color: Colors.BLACK },
    ]

    expect(textInstance.props.style[0]).toMatchObject(expectedStyle)
  })

  it('it should render children as value', () => {
    const { getByTestId } = render(<Text testID={testId}>Test</Text>)

    const textInstance = getByTestId(testId)

    expect(textInstance.props.children).toBe('Test')
  })
})
