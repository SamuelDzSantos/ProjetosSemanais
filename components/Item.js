import { StatusBar } from 'expo-status-bar';
import {View,Text, StyleSheet,Image} from 'react-native';



export default function Item(source){
    
    function getHeightAndWidth(){
        return [(Math.random()*200)+150,(Math.random()*200)+150]
    }
    let values = getHeightAndWidth();
    return(
        <View style={[styles.dataElement(values)]} >
            <Image 
            source={source.title}
            resizeMode="stretch"
            style={styles.dataElement(values)
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
    },
    item: (color) => ({
        margin:20,
        backgroundColor: color,
    }),
    dataElement : ([height,width]) =>({
        height:height,
        width:width,
        margin:20,
    })
})