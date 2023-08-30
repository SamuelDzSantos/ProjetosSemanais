import { View, Text ,StyleSheet} from 'react-native';

export default function Result(props) {
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{props.message}</Text>
            <Text style={styles.resultText} >{props.resultMedia}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer:{
        color:"black",
        flexDirection:"row",
        marginTop:10,
    },
    resultText:{
        fontSize:22,
        fontWeight:20,
        color:"white",
    }

})