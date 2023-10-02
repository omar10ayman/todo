import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"task",
    initialState:{
        taskArray:[]
    },
    reducers:{
        addTask: (state,action)=>{
            const{task ,des}=action.payload;
            if(task){
                let taskObj={
                    task,
                    des,
                    isDone: false,
                    id:Date.now(),
                  }
                  state.taskArray=[...state.taskArray,taskObj]
            }
        },
        deleteTask:(state,action)=>{
            const {id}=action.payload;
            state.taskArray= state.taskArray.filter(task=>task.id !==id)
        },
        doneTask:(state,action)=>{
            const {id}=action.payload;
            let isDoneTask= state.taskArray.find(task=>task.id===id)
            if(state.taskArray)isDoneTask.isDone=!isDoneTask.isDone

            
        },

    }
})
export const {addTask,deleteTask,doneTask,showDoneTask} =todoSlice.actions
export default todoSlice;