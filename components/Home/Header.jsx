import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from './../../constants/Colors.ts'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    const {user} = useUser();
  return (
    <View style={{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.HEADER,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
        <Image source={{uri:user?.imageUrl}}
            style={{
                width:45,
                height:45,
                borderRadius:99
            }}
        />
        <View >
            <Text style={{
            color:Colors.SUBHEADER
        }}>Welcome,</Text>
            <Text style={{
                fontSize:19,
                fontFamily:'outfit-medium',
                color:Colors.SUBHEADER
            }}>{user?.fullName}</Text>
        </View>
      </View>
      {/* Search Bar */}
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor:Colors.SUBHEADER,
        padding:10,
        marginVertical:10,
        marginTop:15,
        borderRadius:8
      }}>
        <Ionicons name="search" size={24} color={Colors.BODY} />
        <TextInput placeholder='Search...' style={{
            fontFamily:'outfit',
            fontSize:16
        }}/>
      </View>
    </View>
  )
}