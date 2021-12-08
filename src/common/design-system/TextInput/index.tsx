import { Colors } from '@common/resources/Colors'
import { Fonts } from '@common/resources/Fonts'
import React, { ReactElement } from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native'

interface ITextInputProps extends TextInputProps {
  leftElement?: ReactElement
  backgroundColor?: Colors
}

export const TextInput = React.forwardRef<RNTextInput, ITextInputProps>(
  ({ style, leftElement, backgroundColor, ...props }, ref) => {
    return (
      <View
        style={[
          styles.wrapper,
          style,
          !!backgroundColor && { backgroundColor },
        ]}
      >
        {!!leftElement && (
          <View
            style={[
              styles.leftElement,
              !!backgroundColor && { backgroundColor },
            ]}
          >
            {leftElement}
          </View>
        )}

        <RNTextInput
          ref={ref}
          style={[styles.input]}
          placeholderTextColor={Colors.GRAPHITE}
          underlineColorAndroid={Colors.TRANSPARENT}
          {...props}
        />
      </View>
    )
  }
)

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.SAND,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 8,
    elevation: 10,
  },
  leftElement: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 48,
    alignItems: 'center',
    color: Colors.GRAPHITE,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
  },
})
