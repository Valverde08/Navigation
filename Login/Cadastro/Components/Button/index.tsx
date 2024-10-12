
import { Text,View,TouchableOpacity, TouchableOpacityProps, ActivityIndicator} from 'react-native';
import { estilos } from './style';

type Props = TouchableOpacityProps &{
    text:string,
    loading?:boolean,
    changePage:()=> void
    
}

export default function Btn({text,loading,changePage, ...rest}:Props){
    return(
        <View style={estilos.mainWrapple}>
            <TouchableOpacity style={estilos.button}
            activeOpacity={0.5}
            onPress={changePage}
            >
                {loading?<ActivityIndicator/> : <Text style={estilos.textoCentral}>{text}</Text>}
            </TouchableOpacity>
        </View>
    )
}