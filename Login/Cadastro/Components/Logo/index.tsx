import AntDesign from '@expo/vector-icons/AntDesign';
import { Text,View} from 'react-native';
import { estilos } from './style';


export default function Hello(){
    return(
        <View style={estilos.mainWrapple}>
            <AntDesign name="checksquare" size={74} color="#5735d1" />
            <Text style={estilos.textoCentral}>Bem-Vindo de Volta</Text>
        </View>
    )
}
