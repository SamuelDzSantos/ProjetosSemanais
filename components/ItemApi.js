import { Image, View } from 'react-native';
import { Dimensions } from 'react-native';

const PATH = "https://image.tmdb.org/t/p/w500";
export default function ItemApi(source) {
    const imageUrl = PATH + source.source;
    const height = Dimensions.get("window").height * 0.2;
    const width = Dimensions.get("window").width * 0.45;
    return (

        <View style={{ marginTop: height * 0.05 }}>
            <Image
                style={{ height: height, width: width }}
                source={source.source ? { 'uri': imageUrl } : require("../assets/noImage.png")}
                resizeMode="cover"
            />
        </View>
    )
}
