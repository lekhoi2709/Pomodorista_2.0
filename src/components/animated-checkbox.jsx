import React, { useEffect, memo } from 'react'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'
import Animated, { Easing, useSharedValue, withTiming, interpolateColor, useAnimatedProps } from 'react-native-reanimated'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
const checkMarkPath = "M11.1766 25.8935C11.1766 25.8935 19.663 32.1569 19.9619 40.2136C21.0383 22.1723 38.2791 8.69013 53.4647 1.48623"
const checkBoxPath = "M1 17C1 10.3726 6.37258 5 13 5H34C40.6274 5 46 10.3726 46 17V38C46 44.6274 40.6274 50 34 50H13C6.37258 50 1 44.6274 1 38V17Z"

const AnimatedPath = Animated.createAnimatedComponent(Path)

export default memo(function AnimatedCheckbox(props) {
   const { checked } = props
   // const checkMarkColor = "#000000"
   const checkBoxColor = "#000000"
   const boxHighlightColor = "#FF0000"

   const progress = useSharedValue(0)

   const animatedBoxProps = useAnimatedProps(() => ({
      fill: interpolateColor(progress.value, [0, 1], ['#000000', boxHighlightColor]),
      stroke: interpolateColor(progress.value, [0, 1], [checkBoxColor, boxHighlightColor])
   }), [checkBoxColor, boxHighlightColor])

   useEffect(() => {
      progress.value = withTiming(checked ? 1 : 0, {
         duration: checked ? 300 : 100,
         easing: Easing.linear
      })
   }, [checked])

   return (

      <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}>
         <AnimatedPath d={checkBoxPath} animatedProps={animatedBoxProps} />
         <Path d={checkMarkPath} stroke="black" stroke-linecap="round" stroke-linejoin="round" />
      </Svg>
   )
})
