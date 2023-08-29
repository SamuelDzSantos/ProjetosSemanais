import { View, Text, StyleSheet } from 'react-native';
import Form from './Form';

export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Digite duas notas</Text>
            <Form />
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        marginBottom: 10,
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})