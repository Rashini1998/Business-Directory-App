import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';

export default function BusinessDetails() {
const {businessid}=useLocalSearchParams();
const [businessdetails,setBusinessDetails]=useState([]);
const [loading,setLoading]=useState(false);
useEffect(()=>{
    GetBusinessDetailById();
},[]);
const GetBusinessDetailById=async()=>{
    setLoading(true);
    const docRef=doc(db,'BusinessList',businessid);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        setBusinessDetails(docSnap.data());
        setLoading(false);
    }else{
        console.log("No such document!");
        setLoading(false);
    }

}
  return (
    <ScrollView>
        {loading?
        <ActivityIndicator
        size={'large'}
        color={Colors.PRIMARY}
        style={{
          marginTop:'60%'
        }}
        />:
        <View>
            {/* Intro */}
            <Intro business={businessdetails}/> 

            {/* Action Buttons    */}
            <ActionButton business={businessdetails}/>

            {/* About section */}
            <About business={businessdetails}/>
        </View>
        }
    </ScrollView>
  )
}