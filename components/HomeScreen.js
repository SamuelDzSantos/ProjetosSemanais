import { View,Text,StyleSheet,Button } from "react-native"
import React from 'react'

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.button}>
            <Button  title="Ir para galeria"
            onPress={()=>{navigation.navigate("Home2")}}
            />
            </View>
            <View style={styles.button}>
            <Button  title="Ir para Cores" 
            onPress={()=>{navigation.navigate("Color")}}
            />
            </View>
            <View style={styles.button}>
            <Button  title="Ir para counter"
            onPress={()=>{navigation.navigate("Counter")}}
            />
            </View>
            <View style={styles.button} >
            <Button title="Ir para form"
            onPress={()=>navigation.navigate("Form")} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            alignContent:"space-between",
        },
        title:{
            fontSize:30,
            marginBottom:80,
        },
        button:{
            margin:15,
            width:200,
        }
    }
)