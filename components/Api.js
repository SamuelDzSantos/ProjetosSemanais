import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import tmdb from '../src/api/tmdb';
import React from 'react'
import ItemApi from './ItemApi';
import { Dimensions } from 'react-native';

export default function Api() {
    const [dados, setDados] = React.useState([]);
    async function searchTmdb(query) {
        const response = await tmdb.get('search/movie', {
            params: {
                query,
                include_adult: false,
            }
        })
        setDados(response.data.results.slice(0, 20));
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Digite aqui'
                onChangeText={(texto) => {
                    searchTmdb(texto);
                }}
            />
            <FlatList
                columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                data={dados}
                numColumns={2}
                renderItem={(item) => <ItemApi source={item.item.poster_path} />}
                keyExtractor={(value) => value.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: Dimensions.get("window").width * 0.6,
        marginTop: 15,
        alignSelf: "center",
        backgroundColor: "lightgray",
        fontWeight: "bold",
    },
    flatList: {
        justifyContent: "space-between",
    }
})