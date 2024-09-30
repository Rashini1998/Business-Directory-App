import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors.ts'
import { collection, getDocs, query } from 'firebase/firestore'
import {db} from '../../configs/FirebaseConfig.js';
import PoplarBusinessCard from './PoplarBusinessCard.jsx';

export default function BusinessList() {
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    GetBusinessList();
  },[])

  const GetBusinessList=async()=>{
    setBusinessList([]);
    const q = query(collection(db,'BusinessList'));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc)=>{
      setBusinessList(prev=>[...prev,doc.data()]);
  })
  }
  return (
    <View>
        <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        padding:20,
        marginBottom:5 
        }}>
        <Text style={{
        fontSize:20, 
        fontFamily:'outfit-bold',
      }}>Popular Business 
      </Text> 
      <Text style={{color:Colors.PRIMARY, fontFamily:'outfit-medium'}}>View All</Text> 
        </View> 
        <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={ ({item,index})=>(
        <View>
          <PoplarBusinessCard business={item} key={index}/>
        </View>
      )
          
        }
        />
    </View>
  )
}