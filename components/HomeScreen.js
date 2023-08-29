import { View,Text,StyleSheet,Button } from "react-native"
import React from 'react'

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Ir para galeria"
            onPress={()=>{navigation.navigate("Home2")}}
            />
            <Button title="Ir para Cores" 
            onPress={()=>{navigation.navigate("Color")}}
            />
            <Button title="Ir para counter"
            onPress={()=>{navigation.navigate("Counter")}}
            />
            <Button title="Ir para form"
            onPress={()=>navigation.navigate("Form")} />
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        }
    }
)