import { Text } from '@common/design-system/Text'
import React from 'react'

interface SummaryProps {
  text?: string
  testID?: string
}

export const Summary: React.FC<SummaryProps> = ({ text = '', testID }) => {
  if (!text) {
    return null
  }

  // remove HTML tags
  const treatedSummary = text
    .replace(/(<[b|i]>)|(<\/[b|p|i]>)/g, '')
    .replace(/(<[p]>)/g, '\n')

  return (
    <Text variant="small" align="justify" testID={testID}>
      {treatedSummary}
    </Text>
  )
}
