import { View, Pressable, Alert, Image} from "react-native";
import PagerView from "react-native-pager-view"

export function Banner(){
    return(
        <View className="w-full h-36 md:h-60 rounded-2xl mb-4 mt-5">
            <PagerView
            style={{flex:1}} initialPage={0} pageMargin={14}
            >
                <Pressable
                className="w-full h-36 md:h-60 rounded-2xl"
                key='1'
                onPress={()=>Alert.alert("teste","Funcionou")}
                >
                <Image
                source={require('../../../assets/images/banner1.png')}
                className="w-full h-36 md:h-60 rounded-2xl"
                />

                </Pressable>
                <Pressable
                className="w-full h-36 md:h-60 rounded-2xl"
                key='1'
                onPress={()=>Alert.alert("teste","Funcionou")}
                >
                <Image
                source={require('../../../assets/images/banner2.png')}
                className="w-full h-36 md:h-60 rounded-2xl"
                />

                </Pressable>
            </PagerView>
        </View>
    )
}
