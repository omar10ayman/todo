import { View, Text ,ScrollView ,TouchableOpacity ,StyleSheet} from 'react-native'
import Input from './Input'
import Tasks from './Tasks'
import Divider from './divder'
import { useState ,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Slices/todoSlices';

export default function Home({navigation}) {
// const [taskArr ,setOArr]=useState([])
const dispatch = useDispatch()
let selectedTasks = useSelector((state)=>state.tasks.taskArray)

let task;
let des;
function  onchangeTask(value){
task = value;
}
function  onchangeDetials(value){
 des=value;
}

  function  saveData(){
   dispatch(addTask({task, des}))
}
 
 return (
    <View>
    <ScrollView>
      <View style={styles.container}>
      <Input placeholder={"Enter Your Task"} onchangeText={(task)=>onchangeTask(task)}/>
      <Input placeholder={"Enter Details"} onchangeText={(des)=>onchangeDetials(des)}/>
      <TouchableOpacity 
      style={{
        backgroundColor:"gray",
        width:150,
        borderColor:"black",
        borderRadius:3,
        borderWidth:3,
        padding:10,
        marginTop:20,
        alignItems:"center",
      }}
      onPress={saveData}
      ><Text style={{
        fontSize:20,
      }}>Add Task</Text></TouchableOpacity>  
      {selectedTasks.length !== 0 && <Divider/> }
      {selectedTasks.map((task)=>
        <Tasks key={task.id} name={task.task} des={task.des} navigation={navigation}   id={task.id} isDone={task.isDone}/>
      )}
      </View>
    </ScrollView>
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