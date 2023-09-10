import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import globalStyles from './styles';
import { useState } from 'react';
export default function Form() {
    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);
    const [mensagem, setMensagem] = useState('');
    const [media, setMedia] = useState(null);
    const calcularMedia = () => {
        if (nota1 != null && nota2 != null) {

            setMedia(
                ((parseFloat(nota1.replace(',', '.')) + parseFloat(nota2.replace(',', '.'))) / 2).toFixed(2)
            );
            setMensagem("Sua media é igual a : ");
        }
    }
    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <Text style={globalStyles.inputLabel} >Nota 1</Text>

                <TextInput
                    style={globalStyles.input}
                    onChangeText={(texto) => {
                        setNota1(texto);

                    }}
                    value={nota1}
                    placeholder='Ex 5.30'
                    keyboardType='numeric' />

                <Text style={globalStyles.inputLabel}>Nota 2</Text>

                <TextInput
                    style={globalStyles.input}
                    onChangeText={(texto) => {
                        setNota2(texto);
                    }}
                    value={nota2}
                    onSubmitEditing={() => {

                    }}
                    placeholder='Ex 9.40'
                    keyboardType='numeric'
                />

                <Button
                    onPress={() => {
                        calcularMedia();
                    }}
                    title="Calcular Media" />

                <Result message={mensagem} resultMedia={media} />

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: 400,
        width: 400,
        borderRadius: 50,
        backgroundColor: "#a2a5a8",
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    }

})

