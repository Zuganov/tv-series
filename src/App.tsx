import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar, StyleSheet } from 'react-native'
import { RootNavigator } from '@navigation/RootNavigator'
import { Colors } from '@common/resources/Colors'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.gestureHandler}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <RootNavigator />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  gestureHandler: { flex: 1, backgroundColor: Colors.WHITE },
})

export default App
