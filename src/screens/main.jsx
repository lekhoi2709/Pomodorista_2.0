import React, { useState, useCallback } from 'react'
import { Fab, Icon, Text, HStack, VStack, Checkbox, Input, ScrollView, Box, useColorModeValue } from 'native-base';
import { AntDesign } from "@expo/vector-icons"
import ThemeToggle from '../components/theme-toggle';
import TaskItem from '../components/task-item';

export default function Main() {
   const [data, setData] = useState('New Task')
   const [editable, setEditable] = useState(false)
   const [selected, setSelected] = useState(false)
   const handleCheckBox = useCallback(() => {
      setSelected(prev => !prev)
   })

   // function addTask() {
   //    setData([...data, <TaskItem />])
   // }

   return (
      <ScrollView className='h-full w-full' bg={useColorModeValue('light.100', 'light.800')}>
         <Text className="text-2xl font-bold m-4" color={useColorModeValue('light.900', 'light.100')}>TO-DO List</Text>
         <TaskItem
            isChecked={selected}
            onChecked={handleCheckBox}
            label={data}
            onPressLabel={() => setEditable(true)}
            onChangeLabel={setData}
            isEditing={editable}
            finishEditing={() => setEditable(false)}
         />
         {/* {data}
         <Fab
            bg={useColorModeValue('light.900', 'light.100')}
            className="w-14 h-14"
            icon={<Icon color={useColorModeValue('light.100', 'light.900')}
               name='plus' as={AntDesign} />}
            onPress={addTask}
            right={5}
            bottom={50} >
         </Fab> */}
         <ThemeToggle />
      </ScrollView>

   );
}