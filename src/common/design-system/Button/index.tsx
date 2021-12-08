import { Colors } from '@common/resources/Colors'
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native'
import { Text } from '../Text'

export type ButtonVariant = keyof typeof variantStyles

interface IButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant
}

export const Button: React.FC<IButtonProps> = ({
  children,
  variant = 'primary',
  disabled,
  style,
  ...props
}) => {
  const variantStyle = variantStyles[variant]
  const buttonStyle = [
    styles.default,
    variantStyle,
    disabled && styles.disabled,
    style,
  ]

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text lineHeight={17} color={variantStyle.color}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const variantStyles = StyleSheet.create({
  primary: {
    color: Colors.WHITE,
    backgroundColor: Colors.BLUE,
  },
  secondary: {
    color: Colors.BLUE,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.BLUE,
  },
})

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 48,
  },
  disabled: { color: Colors.GRAPHITE, backgroundColor: Colors.ICE },
})
