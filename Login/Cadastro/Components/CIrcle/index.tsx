import { Text,View,TouchableOpacity, TouchableOpacityProps, ActivityIndicator} from 'react-native';
import { estilos } from './style';
import { estilo } from '../Tabs/style';

type Props = {
    color?:string
    
}

export default function Circle({...rest}:Props){
    return(
        <View style={[estilos.Circle, {borderColor:rest.color?rest.color:'gray'}]}>
            
        </View>
    )
}