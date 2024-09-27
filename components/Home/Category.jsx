import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import {Colors} from '../../constants/Colors.ts'
import CategoryItem from './CategoryItem.jsx';
import { collection,getDocs,query } from 'firebase/firestore';
import {db} from '../../configs/FirebaseConfig.js';
import { useRouter } from 'expo-router';

export default function Category() {
    const [categoryList, setCategoryList] = useState([]);
    const router=useRouter();
    useEffect(()=>{
        GetCategoryList();
    },[]);
    const GetCategoryList=async()=>{
        setCategoryList([]);
        const q = query(collection(db,'Category'));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            setCategoryList(prev=>[...prev,doc.data()]);
        })
    }
  return (
    <View>
        <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        padding:20 
        }}>
        <Text style={{
        fontSize:20, 
        fontFamily:'outfit-bold',
      }}>Category 
      </Text> 
      <Text style={{color:Colors.PRIMARY, fontFamily:'outfit-medium'}}>View All</Text> 
        </View>
        <FlatList
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft:20}}
        horizontal={true}
        renderItem={({item,index})=>(
            <CategoryItem category={item} key={index} onCategoryPress={(category)=>router.push('/businesslist/'+item.name)}/>
        )}
      />

    </View>
  )
}