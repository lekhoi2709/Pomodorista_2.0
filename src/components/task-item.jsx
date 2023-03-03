import React, { useState } from 'react'
import { HStack, Checkbox, Text, Icon } from "native-base"
import { Ionicons } from "@expo/vector-icons"

export default function TaskItem() {
   const [selected, setSelected] = useState([])

   return (
      <HStack HStack space={4} className="w-full justify-start items-center p-4" >
         <Checkbox
            onChange={setSelected}
            value={selected} size='lg'
            colorScheme='info'
            _light={{ borderColor: 'light.900' }}
            _dark={{ borderColor: 'light.100' }}
            icon={<Icon name='checkmark-done' as={Ionicons} />} />
         <Text>Task Item</Text>
      </HStack >
   )
}