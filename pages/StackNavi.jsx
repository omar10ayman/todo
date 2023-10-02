import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import TaskDetails from './TaskDetails';
const Stack= createNativeStackNavigator()

export default function StackNavi() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={TaskDetails}/>
      </Stack.Navigator>
  )
}