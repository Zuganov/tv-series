import { Colors } from '@common/resources/Colors'
import { Fonts } from '@common/resources/Fonts'
import React from 'react'
import { Text as RNText, StyleSheet, TextProps, TextStyle } from 'react-native'

type TextVariants = keyof typeof variantStyles

interface ITextProps extends TextProps {
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none'
  color?: Colors
  align?: 'auto' | 'center' | 'justify' | 'left' | 'right'
  variant?: TextVariants
  bold?: boolean
  lineHeight?: number
}

export const Text: React.FC<ITextProps> = ({
  children,
  textTransform,
  color = Colors.BLACK,
  align,
  variant = 'regular',
  bold,
  lineHeight,
  style,
  ...props
}) => {
  const appliedStyles = [variantStyles[variant]] as TextStyle[]

  if (bold) {
    appliedStyles.push({ fontFamily: Fonts.PoppinsBold })
  }

  if (color) {
    appliedStyles.push({ color })
  }

  if (align) {
    appliedStyles.push({ textAlign: align })
  }

  if (textTransform) {
    appliedStyles.push({ textTransform })
  }

  if (lineHeight) {
    appliedStyles.push({ lineHeight })
  }

  return (
    <RNText
      style={[appliedStyles, style]}
      suppressHighlighting
      textBreakStrategy="simple"
      {...props}
    >
      {children}
    </RNText>
  )
}

const variantStyles = StyleSheet.create({
  title: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: 32,
    lineHeight: 40,
  },
  regular: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
    lineHeight: 16,
  },
  small: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    lineHeight: 14,
  },
})
