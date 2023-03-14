import { Path } from 'react-native-svg'
import { useColorModeValue } from 'native-base'
import Animated, { Easing, interpolateColor, useAnimatedProps, createAnimatedPropAdapter, processColor } from 'react-native-reanimated'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export default function AnimatedCheckbox(props) {
  const { progress, checkBoxPath } = props
  const boxFillColor = useColorModeValue("#FFFFFF", "#404040")
  const checkBoxColor = useColorModeValue("#000000", "#F3F3F3")
  const boxHighlightColor = "#4169e1"

  const propsAdapter = createAnimatedPropAdapter((props) => {
    if (Object.keys(props).includes('fill') && Object.keys(props).includes('stroke')) {
      props.fill = {
        type: 0,
        payload: processColor(props.fill)
      }

      props.stroke = {
        type: 0,
        payload: processColor(props.stroke)
      }
    }
  }, ['fill'])

  const animatedBoxProps = useAnimatedProps(() => {
    return {
      fill: interpolateColor(
        progress.value,
        [0, 1],
        [boxFillColor, boxHighlightColor],
        'RGB',
        Easing.bezier(0.16, 1, 0.3, 1)
      ),

      stroke: interpolateColor(
        progress.value,
        [0, 1],
        [checkBoxColor, boxHighlightColor],
        'RGB',
        Easing.bezier(0.16, 1, 0.3, 1)
      )
    }
  }, [checkBoxColor, boxHighlightColor, boxFillColor], propsAdapter)

  return (
    <AnimatedPath
      d={checkBoxPath}
      animatedProps={animatedBoxProps}
      strokeWidth={3}
    />
  )
}
