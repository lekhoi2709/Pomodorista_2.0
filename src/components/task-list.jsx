import React, { useCallback } from 'react'
import { ScrollView, View } from "native-base";
import TaskItem from "./task-item";

export const HandleTaskItem = (props) => {
   const { data, isEditing, onChecked, onPressLabel, onEditLabel, onFinishEdit } = props

   const handlePressCheckbox = useCallback(() => onChecked(data), [data, onChecked])

   const handleFinishEdit = useCallback(() => onFinishEdit(data), [data, onFinishEdit])

   const handlePressLabel = useCallback(() => onPressLabel(data), [data, onPressLabel])

   const handleEditLabel = useCallback(label => onEditLabel(data, label), [data, onEditLabel])

   var width = 'w-fit'
   if (data.label === '') {
      width = 'w-[80%]'
   }

   return (
      <View>
         <TaskItem
            label={data.label}
            labelWidth={width}
            isChecked={data.completed}
            onChecked={handlePressCheckbox}
            isEditing={isEditing}
            onPressLabel={handlePressLabel}
            onChangeLabel={handleEditLabel}
            onFinishEdit={handleFinishEdit}
         />
      </View>
   )
}

export default function TaskList(props) {
   const { data, isEditingId, onChecked, onPressLabel, onEditLabel, onFinishEdit } = props

   return (
      <ScrollView space={1}>
         {data.map((item) =>
            <HandleTaskItem
               data={item}
               key={item.id}
               isEditing={item.id === isEditingId}
               onChecked={onChecked}
               onPressLabel={onPressLabel}
               onEditLabel={onEditLabel}
               onFinishEdit={onFinishEdit}
            />)}
      </ScrollView>
   )
}
