import React, { useState, memo } from 'react'
import { HStack, Checkbox, Icon, themeTools, useColorModeValue } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import AnimatedTaskLabel from './animated-task-item'
import theme from '../theme.js'

export default memo(function TaskItem() {
   const activeTextColor = themeTools.getColor(theme, useColorModeValue('light.900', 'light.100'))
   const inactiveTextColor = themeTools.getColor(theme, useColorModeValue('muted.400', 'muted.600'))
   const [selected, setSelected] = useState(false)

   return (
      <HStack HStack space={4} className="w-full justify-start items-center p-4" >
         <Checkbox
            onChange={setSelected}
            value={selected} size='lg'
            colorScheme='info'
            _light={{ borderColor: 'light.900' }}
            _dark={{ borderColor: 'light.100' }}
            icon={<Icon name='checkmark-done' as={Ionicons} />}
            accessible={true}
            accessibilityLabel='Completed' />
         <AnimatedTaskLabel
            isCompleted={selected}
            textColor={activeTextColor}
            completedTextColor={inactiveTextColor}>
            Task Item
         </AnimatedTaskLabel>
      </HStack >
   )
})