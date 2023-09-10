import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';


export default function Item(source) {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    function getHeightAndWidth() {
        return [(Math.random() * windowHeight * 0.4) + windowHeight * 0.1, (Math.random() * windowWidth * 0.4) + windowWidth * 0.1]
    }
    let values = getHeightAndWidth();
    return (
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
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: (color) => ({
        margin: 20,
        backgroundColor: color,
    }),
    dataElement: ([height, width]) => ({
        height: height,
        width: width,
        margin: 20,
    })
})