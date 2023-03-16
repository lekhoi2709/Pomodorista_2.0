import React from 'react'
import { Path } from 'react-native-svg'
import Animated, { useAnimatedProps,  interpolate } from 'react-native-reanimated'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export default function AnimatedCheckmark(props) {
   const { progress, checkMarkPath, strokeWidth, strokeOpacity, checkMarkColor } = props

   const animatedProps = useAnimatedProps(() => ({
      strokeDashoffset: interpolate(progress.value, [0, 1], [90, 0]),
   }))

   return (
      <AnimatedPath
         d={checkMarkPath}
         stroke={checkMarkColor}
         strokeWidth={strokeWidth}
         animatedProps={animatedProps}
         strokeOpacity={strokeOpacity}
         strokeDasharray="90"
         strokeLinejoin="round"
         strokeLinecap="round"
      />
   )
}
