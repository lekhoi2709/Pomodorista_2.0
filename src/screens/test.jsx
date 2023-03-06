import React, { useCallback, useState } from 'react'
import { View, Box } from "native-base"
import { Pressable } from 'react-native'
import AnimatedCheckbox from "../components/animated-checkbox"

export default function Test() {
   const [checked, setChecked] = useState(false)
   const handlePressCheckBox = useCallback(() => (
      setChecked(prev => !prev)
   ))
   console.log(checked)
   return (
      <View>
         <Box w="100px" h="100px">
            <Pressable onPress={handlePressCheckBox}>
               <AnimatedCheckbox checked={checked} />
            </Pressable>
         </Box>
      </View>
   )
}