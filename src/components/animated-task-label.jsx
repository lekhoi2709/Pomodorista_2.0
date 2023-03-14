import React, { useEffect, memo } from "react"
import { Pressable } from 'react-native'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  interpolateColor
} from 'react-native-reanimated'
import { HStack, Text, Box } from 'native-base'

const AnimatedHStack = Animated.createAnimatedComponent(HStack)
const AnimatedText = Animated.createAnimatedComponent(Text)
const AnimatedBox = Animated.createAnimatedComponent(Box)

export default memo(function AnimatedTaskLabel(props) {
  const { isCompleted, onPress, children, textColor, completedTextColor, labelWidth } = props

  const textColorProg = useSharedValue(0)
  const textColorAnimated = useAnimatedStyle(() => ({
    color: interpolateColor(textColorProg.value, [0, 1], [textColor, completedTextColor])
  }), [isCompleted, textColor, completedTextColor])

  const labelOffSet = useSharedValue(0)
  const labelAnimated = useAnimatedStyle(() => ({
    transform: [{ translateX: labelOffSet.value }]
  }), [isCompleted])

  const strikethroughWidth = useSharedValue(0)
  const strikethroughAnimated = useAnimatedStyle(() => ({
    width: `${strikethroughWidth.value * 100}%`,
    borderBottomColor: interpolateColor(textColorProg.value, [0, 1], [textColor, completedTextColor])
  }), [isCompleted, textColor, completedTextColor])

  useEffect(() => {
    const easing = Easing.out(Easing.quad)
    if (isCompleted) {
      labelOffSet.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing })
      )
      textColorProg.value = withDelay(400, withTiming(1, { duration: 400, easing }))
      strikethroughWidth.value = withTiming(1, { duration: 400, easing })
    }
    else {
      textColorProg.value = withTiming(0, { duration: 400, easing })
      strikethroughWidth.value = withTiming(0, { duration: 400, easing })
    }
  })

  return (
    <Pressable onPress={onPress} className={labelWidth}>
      <AnimatedHStack style={[labelAnimated]}>
        <AnimatedText
          fontSize={18}
          noOfLines={1}
          isTruncated
          px={1}
          style={[textColorAnimated]}>
          {children}
        </AnimatedText>
      </AnimatedHStack>
      <AnimatedBox className="h-[25%]" position='absolute' style={[strikethroughAnimated]} borderBottomWidth={1} />
    </Pressable>
  )
})
