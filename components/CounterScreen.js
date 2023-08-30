import { View,Text,Button , StyleSheet} from "react-native";
import React from 'react';

export default function CounterScreen(){
    const [counter,setCounter] = React.useState(0);
    return(
        <View>
            <Button title="Incrementa"
            onPress={()=>{setCounter(counter+1)}}
            />
            <Text style={styles.counterText}>{counter}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    counterText:{
        alignSelf:"center",
    }
})