import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors.ts'

export default function CategoryItem({category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
        <View style={{padding:15,
            backgroundColor:Colors.SUBHEADER,
            borderRadius:99,
            marginRight:20
        }}>
        <Image source={{uri:category.icon}} style={{
        width:40,
        height:40
      }}/> 
        </View>
        <Text style={{marginRight:20,fontSize:12, fontFamily:'outfit-medium',textAlign:'center', marginTop:5}}>{category.name}</Text>
  
    </TouchableOpacity>
  )
}