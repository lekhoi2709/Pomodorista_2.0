import React, { useRef, useState } from 'react'
import { Path } from 'react-native-svg'
import Animated, { Easing, useAnimatedProps, createAnimatedPropAdapter, interpolate } from 'react-native-reanimated'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export default function AnimatedCheckmark(props) {
   const { progress, checkMarkPath, strokeWidth, strokeOpacity, checkMarkColor } = props
   const [length, setLength] = useState(0)
   // const ref = useRef()

   // const checkMarkAdapter = createAnimatedPropAdapter((props) => {
   //    if (Object.keys(props).includes('strokeDashoffset')) {
   //       props.strokeDashoffset = {
   //          type: 0,
   //          payload:
   //       }
   //    }
   // })

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