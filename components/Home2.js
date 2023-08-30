import React from 'react'
import { SafeAreaView , View, FlatList,StyleSheet , Text,StatusBar } from 'react-native'
import Item from './Item';

const DATA = [
    {id: '01',source:require("../assets/trees/f1.jpg")},
    {id: '02',source:require("../assets/trees/f2.jpg")},
    {id:"03",source:require("../assets/trees/f3.jpg")},
    {id: '04',source:require("../assets/trees/f4.jpg")},
    {id: '05',source:require("../assets/trees/f5.jpg")},
    {id:"06",source:require("../assets/trees/f6.jpg")},
    {id: '07',source:require("../assets/trees/f7.jpg")},
    {id: '08',source:require("../assets/trees/f8.jpg")},
    {id:"09",source:require("../assets/trees/f9.jpg")},
]


export default function Home2(){
    
    function randomizeArray(arr){
        arr.sort(()=>{Math.random()>0.5 ? 1 : -1})
    }
    randomizeArray(DATA)
    return(
        <SafeAreaView>
            <FlatList
            numColumns={4}
            data={DATA}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                return(
            <Item title={item.source} />
            )}
        }
            />
        </SafeAreaView>
    )
}



