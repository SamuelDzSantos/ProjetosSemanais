import { StatusBar } from 'expo-status-bar';
import {View,Text, StyleSheet} from 'react-native';



export default function Item({title}){
    function createColor(){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`
    }
    return(
        <View style={styles.item(createColor())}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
    },

    item: (color) => ({
        height:100,
        width:"100%",
        backgroundColor: color,
    }),
    title:{

    }
})