import React, { useState, useCallback } from 'react'
import ThemeToggle from '../components/theme-toggle';
import { Fab, Icon, Text, View, useColorModeValue } from 'native-base';
import { AntDesign } from "@expo/vector-icons"
import TaskList from '../components/task-list';
// import TaskItem from '../components/task-item';

const initialData = [
  {
    id: 1,
    label: 'New Task',
    completed: false,
  },
]

export default function Main() {
  const [data, setData] = useState(initialData)
  const [editableId, setEditableId] = useState(null)

  const handlePressCheckbox = useCallback(item => {
    setData(prev => {
      let newData = [...prev]
      const idx = prev.indexOf(item)
      newData[idx] = {
        ...item,
        completed: !item.completed
      }
      return newData
    })
  }, [])

  const handlePressLabel = useCallback(item => {
    setEditableId(item.id)
  }, [])

  const handleEditLabel = useCallback(function(item, newLabel) {
    setData(prev => {
      let newData = [...prev]
      const idx = prev.indexOf(item)
      newData[idx] = {
        ...item,
        label: newLabel,
      }
      return newData
    })
  }, [])

  const handleFinishEdit = useCallback(_item => {
    setEditableId(null)
  }, [])

  function addTask() {
    const id = data.length + 1
    setData([...data, {
      id,
      label: '',
      completed: false
    }])
    setEditableId(id)
  }

  return (
    <View className='h-full w-full' bg={useColorModeValue('light.100', 'light.800')}>
      <Text className="text-2xl font-bold m-4" color={useColorModeValue('light.900', 'light.100')}>TO-DO List</Text>
      <TaskList
        data={data}
        onChecked={handlePressCheckbox}
        onPressLabel={handlePressLabel}
        isEditingId={editableId}
        onEditLabel={handleEditLabel}
        onFinishEdit={handleFinishEdit}
      />
      {/* <TaskItem
            isChecked={data[1].completed}
            onChecked={handlePressCheckbox}
            label={data[1].label}
            onPressLabel={handlePressLabel}
            onChangeLabel={handleEditLabel}
            isEditing={editableId}
            onFinishEdit={handleFinishEdit}
         /> */}
      <Fab
        bg={useColorModeValue('light.900', 'light.100')}
        className="w-14 h-14"
        icon={<Icon color={useColorModeValue('light.100', 'light.900')}
          name='plus' as={AntDesign} />}
        onPress={addTask}
      />
      <ThemeToggle />
    </View>

  );
}
