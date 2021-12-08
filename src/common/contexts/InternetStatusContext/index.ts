import { createContainer } from 'unstated-next'
import NetInfo from '@react-native-community/netinfo'
import { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/core'
import { RootParamsList } from '@navigation/RootNavigator'

const useInternetStatus = () => {
  const [hasInternet, setHasInternet] = useState(true)

  const { navigate } = useNavigation<NavigationProp<RootParamsList>>()

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(
      ({ isConnected, isInternetReachable }) => {
        if (!(isConnected && isInternetReachable)) {
          return setHasInternet(false)
        }

        setHasInternet(true)
      }
    )

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (!hasInternet) {
      navigate('NoInternet')
    }

    navigate('TabNavigator', { screen: 'HomeStack' })

    return () => {
      setHasInternet(true)
    }
  }, [hasInternet])
}

export const InternetStatusContext = createContainer(useInternetStatus)
