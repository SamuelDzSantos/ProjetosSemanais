import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
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
        <View>
            <Text>Nota 1</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto)=>{
                    setNota1(texto);
                    
                }}
                value={nota1}
                placeholder='Ex 5.30'
                keyboardType='numeric' />
            <Text>Nota 2</Text>
            <TextInput
                style={styles.input}
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
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 4,
    }
})