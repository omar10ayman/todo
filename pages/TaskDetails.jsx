import { View, Text, StyleSheet ,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function TaskDetails({navigation}) {
    const route =useRoute().params
  return (
    <View style={style.container}>
      <Text style={style.styleText}>Name : {route.name}</Text>
      <Text style={style.styleText}> Details : {route.des}</Text>
      <TouchableOpacity style={{
            backgroundColor:'green',
            padding:10,
            borderRadius:10,
        }} 
        onPress={()=> navigation.navigate("Home")}
        ><Text>Back To Home</Text></TouchableOpacity>
    </View>
  )
}

const style =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%",
      },
    styleText:{

        fontSize:25,
    }
})