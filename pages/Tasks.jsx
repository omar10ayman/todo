import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, doneTask,  } from '../Slices/todoSlices'

export default function Tasks({name ,navigation ,des ,id ,isDone}) {
  const dispatch =useDispatch()
  const deletedTaskItem=()=>{
    dispatch(deleteTask({id}))
  }
  const updateTask=()=>{
    dispatch(doneTask({id}))
  }
 
 
  return (
        <View style={{
        marginTop:20,
        height:100,
        borderRadius:10,
        backgroundColor:'gray',
        width:"75%",
        alignItems:"center",
        justifyContent:"center",
        gap:10
    }}>
    {
      isDone==false ?  <Text style={{
        fontSize:20,
      }}>{name}</Text> :  <Text style={{
        fontSize:20,
        opacity:0.3
      }}>{name}</Text>
    }
      
      <View style={{
        gap:10,
        // marginTop:20,
        // padding: 10,
        display: 'flex',
        flexDirection:"row"
      }}>
        <TouchableOpacity style={{
            backgroundColor:'white',
            padding:10,
            borderRadius:10,
        }} 
        onPress={()=> navigation.navigate("Details",{
          name,
          des
        })}
        ><Text>Show Details</Text></TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor:'green',
            padding:10,
            borderRadius:10,
        }} 
        onPress={updateTask}
        >{isDone==false ?<Text>Done</Text>:<Text>NotDone</Text> }</TouchableOpacity>
        <TouchableOpacity style={{
            backgroundColor:'red',
            padding:10,
            borderRadius:10,
        }}
        onPress={deletedTaskItem}
        ><Text>Delete</Text></TouchableOpacity>
      </View>
    </View>
  )
}