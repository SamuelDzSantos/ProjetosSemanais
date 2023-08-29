import React , {useState} from 'react'
import { View,Text,Button , FlatList,StyleSheet } from 'react-native'


export default function ColorList(){
    const [colors,setColors] = useState([]);

    function addColor(){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        setColors(prevColors => [...prevColors,`rgb(${r},${g},${b})`])
    }
    return(
        <View>
            <Button title='Adiciona cor'
            onPress={()=>{addColor()}}
            />
            <FlatList 
            horizontal
            data={colors}
            keyExtractor={item=>item}
            renderItem={({item})=>{
                return(
                    <View style={[styles.item,{backgroundColor:item}]}>
                    </View>
                )    
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        height:100,
        width:100,
    }
})