import { View,Text,Button } from "react-native";
import React from 'react';

export default function CounterScreen(){
    const [counter,setCounter] = React.useState(0);
    return(
        <View>
            <Button title="Incrementa"
            onPress={()=>{setCounter(counter+1)}}
            />
            <Text>{counter}</Text>
        </View>

    )
}