// Dynamic route -> businesslist/categoryName

import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import BusinessCard from '../../components/BusinessList/BusinessCard';
import { Colors } from '../../constants/Colors';


export default function BusinessListByCategory() {
    const navigation=useNavigation();
    const {category}=useLocalSearchParams();
    const [businessList,setBusinessList]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:category
        });
        GetBusinessList();
    },[]);

    const GetBusinessList=async()=>{
      setLoading(true);
        setBusinessList([]);
        const q=query(collection(db,'BusinessList'),where("category",'==',category));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            setBusinessList(prev=>[...prev,doc.data()]);
        })
        setLoading(false);
    }
  return (
    <View>

     {businessList?.length>0&& loading==false? 
     
     <FlatList
     onRefresh={GetBusinessList}
     refreshing={loading}
      data={businessList}
      renderItem={({item,index})=>(
        <BusinessCard business={item} key={index}/>
      )}
      />:
      loading?<ActivityIndicator
      size={'large'}
      color={Colors.PRIMARY}
      style={{
        marginTop:'60%'
      }}
      />:
      <Text style={{
        fontSize:20,
        fontFamily:'outfit-bold',
        color:Colors.GRAY,
        textAlign:'center',
        marginTop:'50%'
      }}>No Business Found</Text>}
    </View>
  )
}