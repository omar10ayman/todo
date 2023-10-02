import { View, Text ,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tasks from './Tasks'

export default function DonePages({}) {
  let {taskArray} = useSelector((state)=>state.tasks)
   let [doneAray, doneState]=useState([])
 useEffect(()=>{
  if(taskArray){
  let selectedTasks=taskArray.filter(task=>task.isDone)
  
  doneState([...selectedTasks])
}
},[taskArray])
return (
  
<View style={styles.container}>

 { doneAray.map(task=>
      <Tasks key={task.id} name={task.task} des={task.des} id={task.id} isDone={task.isDone}/>
  )}
  
</View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height:"100%",
  },
});