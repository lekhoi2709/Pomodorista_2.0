import React, { useEffect, memo } from 'react'
import Svg from 'react-native-svg'
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated'
import AnimatedBox from './animated-box'
import AnimatedCheckmark from './animated-checkmark'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
const checkBoxPath = "M1 17C1 10.3726 6.37258 5 13 5H34C40.6274 5 46 10.3726 46 17V38C46 44.6274 40.6274 50 34 50H13C6.37258 50 1 44.6274 1 38V17Z"
const checkMarkPath = "M11.1766 25.8935C11.1766 25.8935 19.663 32.1569 19.9619 40.2136C21.0383 22.1723 38.2791 8.69013 53.4647 1.48623"

export default memo(function AnimatedCheckbox(props) {
   const { checked } = props
   const progress = useSharedValue(0)

   useEffect(() => {
      progress.value = withTiming(checked ? 1 : 0, {
         duration: checked ? 300 : 100,
         easing: Easing.linear
      })
   }, [checked])

   return (
      <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}>
         <AnimatedBox
            progress={progress}
            checkBoxPath={checkBoxPath}
         />
         <AnimatedCheckmark
            progress={progress}
            checkMarkPath={checkMarkPath}
            strokeWidth={4}
            checkMarkColor='#FFFFFF'
         />
      </Svg>
   )
})
