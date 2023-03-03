import * as React from 'react'
import { HStack, Icon, Switch, useColorMode } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function themeToggle() {
   const { colorMode, toggleColorMode } = useColorMode()
   return (
      <HStack alignItems='center' space={2} m={4}>
         <Icon name='theme-light-dark' as={MaterialCommunityIcons} color={colorMode} />
         <Switch isChecked={colorMode === 'light'} onToggle={toggleColorMode} colorScheme='light'></Switch>
      </HStack>
   )
}