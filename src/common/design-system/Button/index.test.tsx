import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { Button } from '@common/design-system/Button'
import { Colors } from '@common/resources/Colors'

const onPress = jest.fn()
const testId = 'test'

describe('Button tests', () => {
  it('it should run onPress function', () => {
    const { getByTestId } = render(
      <Button onPress={onPress} testID={testId}>
        Test
      </Button>
    )

    const buttonInstance = getByTestId(testId)
    fireEvent.press(buttonInstance)

    expect(onPress).toBeCalled()
  })

  it('should render variant as primary by default', () => {
    const { getByTestId } = render(<Button testID={testId}>Test</Button>)

    const buttonInstance = getByTestId(testId)

    const expectedStyle = {
      color: Colors.WHITE,
      backgroundColor: Colors.BLUE,
    }

    expect(buttonInstance.props.style).toMatchObject(expectedStyle)
  })

  it('should render button disabled', () => {
    const { getByTestId } = render(
      <Button disabled testID={testId}>
        Test
      </Button>
    )

    const buttonInstance = getByTestId(testId)

    const expectedStyle = {
      backgroundColor: Colors.ICE,
    }

    expect(buttonInstance.props.style).toMatchObject(expectedStyle)
  })
})
