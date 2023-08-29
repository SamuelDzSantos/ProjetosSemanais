import React from 'react'
import { SafeAreaView , View, FlatList,StyleSheet , Text,StatusBar } from 'react-native'
import Item from './Item';

const DATA = [
    {id: '01',title:"First Item"},
    {id: '02',title:"Second Item"},
    {id:"03",title:"Third Item"},
]


export default function Home2(){
    return(
        <SafeAreaView>
            <FlatList
            data={DATA}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><Item title={item.title} />}
            />
        </SafeAreaView>
    )
}


