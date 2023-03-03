import { Box, Fab, Icon, FlatList, Text, HStack, Checkbox, Input } from 'native-base';
import { AntDesign } from "@expo/vector-icons"
import React, { useState } from 'react'

export default function Main() {
   const [inputText, setInputText] = useState()
   const [data, setData] = useState([])

   function addTask() {
      setData([...data,
      <HStack HStack space={4} className="w-full justify-center items-center my-4" >
         <Checkbox w='25%' />
         <Input placeholder='Enter task' w='80%'></Input>
      </HStack >
      ])
   }

   return (
      <Box flex={1} _dark={{ bg: "primary.900" }} _light={{ bg: "light.100" }} className="w-screen p-4">
         <Text className="text-2xl font-bold m-4">TO-DO List</Text>
         {data}
         <Fab _dark={{ bg: "primary.100" }} _light={{ bg: "light.900" }} className="w-14 h-14" icon={<Icon color='white' name='plus' as={AntDesign} />} onPress={addTask}>
         </Fab>
      </Box>
   );
}