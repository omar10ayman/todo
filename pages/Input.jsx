import { View, Text ,TextInput} from 'react-native'
import React from 'react'

export default function Input({placeholder,onchangeText}) {
  return (
    <View style={{
        width:"100%",
        marginTop:25,
        alignItems:"center",
      }}>
        <TextInput
        style={{
          width:350,
          height:50,
          borderWidth:3,
          borderRadius:10,
          padding:10,
        }}
        placeholder={placeholder}
        onChangeText={onchangeText}
        ></TextInput>
      </View>
  )
}