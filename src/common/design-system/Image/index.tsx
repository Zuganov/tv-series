import { IMAGES } from '@common/resources/Images'
import React, { useState } from 'react'
import {
  ImageProps as RNImageProps,
  Image as RNImage,
  ImageURISource,
} from 'react-native'

interface ImageProps extends RNImageProps {}

export const Image: React.FC<ImageProps> = ({ source, ...props }) => {
  const [imageHasError, setImageHasError] = useState(false)

  const handleImageError = () => {
    setImageHasError(true)
  }

  const isRemoteImage = typeof source !== 'number'

  const imageToLoad =
    imageHasError || (isRemoteImage && !(source as ImageURISource)?.uri)
      ? IMAGES.BrokenTVSmall
      : source

  return <RNImage {...props} source={imageToLoad} onError={handleImageError} />
}
