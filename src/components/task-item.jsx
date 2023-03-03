import React, { useState, memo, useCallback } from 'react'
import { HStack, Checkbox, Icon, themeTools, useColorModeValue, Input } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import AnimatedTaskLabel from './animated-task-item'
import theme from '../theme.js'

export default memo(function TaskItem(props) {
   const { isChecked, onChecked, label, onPressLabel, onChangeLabel, isEditing, finishEditing } = props

   const activeTextColor = themeTools.getColor(theme, useColorModeValue('light.900', 'light.100'))
   const inactiveTextColor = themeTools.getColor(theme, useColorModeValue('muted.400', 'muted.600'))
   const handleChangeTask = useCallback((evt) => {
      onChangeLabel && onChangeLabel(evt.nativeEvent.text)
   }, [onChangeLabel])

   return (
      <HStack HStack space={4} className="w-full justify-start items-center p-4" >
         <Checkbox
            onChange={onChecked}
            value={isChecked} size='lg'
            colorScheme='indigo'
            borderColor={useColorModeValue('light.600', 'light.400')}
            icon={<Icon name='checkmark-done' as={Ionicons} />}
            accessible={true}
            accessibilityLabel='Completed' />
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
               onBlur={finishEditing} /> :
            <AnimatedTaskLabel
               onPress={onPressLabel}
               isCompleted={isChecked}
               textColor={activeTextColor}
               completedTextColor={inactiveTextColor}>
               {label}
            </AnimatedTaskLabel>}

      </HStack >
   )
})