import React, { useCallback } from 'react'
import { HStack, Box, Center, themeTools, useColorModeValue, Input } from "native-base"
import { Pressable } from 'react-native'
import AnimatedTaskLabel from './animated-task-label'
import theme from '../theme.js'
import AnimatedCheckbox from './animated-check-box/animated-checkbox'

export default TaskItem = (props) => {
   const { isChecked, onChecked, label, onPressLabel, onChangeLabel, isEditing, onFinishEdit } = props

   const activeTextColor = themeTools.getColor(theme, useColorModeValue('light.900', 'light.100'))
   const inactiveTextColor = themeTools.getColor(theme, useColorModeValue('muted.400', 'muted.600'))

   const handleChangeTask = useCallback((evt) => {
      onChangeLabel && onChangeLabel(evt.nativeEvent.text)
   }, [onChangeLabel])

   return (
      <HStack w="full" px={4} alignItems="center" >
         <Box w="60px" h="60px" className="pt-2">
            <Pressable onPress={onChecked}>
               <AnimatedCheckbox checked={isChecked} />
            </Pressable>
         </Box>

         {isEditing ?
            <Input
               px={1}
               py={0}
               placeholder='New Task'
               variant='unstyled'
               value={label}
               fontSize={18}
               autoFocus
               onChange={handleChangeTask}
               blurOnSubmit
               onBlur={onFinishEdit} /> :
            <AnimatedTaskLabel
               onPress={onPressLabel}
               isCompleted={isChecked}
               textColor={activeTextColor}
               completedTextColor={inactiveTextColor}>
               {label}
            </AnimatedTaskLabel>}
      </HStack >
   )
}