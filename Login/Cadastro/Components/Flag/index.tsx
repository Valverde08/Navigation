import { Text,View,TouchableOpacity, TouchableOpacityProps, ActivityIndicator} from 'react-native';
import { estilos } from './style';
import { estilo } from '../Tabs/style';

type Props = {
    color:string,
    caption:string
    
}

export default function Flalg({...rest}:Props){
    return(
        <View style={[estilos.flag,{backgroundColor:rest?.color}]}>
            <Text style={estilos.FlagText}>{rest.caption}</Text>
        </View>
    )
}