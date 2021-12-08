import React from 'react'
import { render } from '@testing-library/react-native'
import { Summary } from '@common/components/Summary'

const testId = 'test'

describe('Summary tests', () => {
  it('should not render if text is empty', () => {
    const { container } = render(<Summary text={undefined} testID={testId} />)

    expect(container.instance).toBeNull()
  })

  it('should remove <b> and <i> tags', () => {
    const { getByTestId } = render(
      <Summary text="<i>Text</i> with <b>tags</b>" testID={testId} />
    )

    const textInstance = getByTestId(testId)

    expect(textInstance.children[0]).toBe('Text with tags')
  })

  it('should jump a line with <p> tag', () => {
    const { getByTestId } = render(
      <Summary text="<p><i>Text</i> with <b>tags</b></p>" testID={testId} />
    )

    const textInstance = getByTestId(testId)

    expect(textInstance.children[0]).toBe('\nText with tags')
  })
})
