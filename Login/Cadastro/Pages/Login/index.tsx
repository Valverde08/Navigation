

import { StyleSheet, Text, View,Alert } from 'react-native';
import Input from '../../Components/Input/index'
import { useState } from 'react';
import Hello from '../../Components/Logo';
import Btn from '../../Components/Button';
import {FontAwesome,MaterialIcons,Octicons} from '@expo/vector-icons';
import {NavigationProp, useNavigation} from '@react-navigation/native'



export default function App() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [ ver, setVer] = useState<boolean>(true)
  const [loading,setLoading] = useState(false)

  const navigation = useNavigation<NavigationProp<any>>()

  async function Logar(){
     
      try {
        setLoading(true)
        if(!email || !pass)
          return Alert.alert('Erro','Campos vazios')

        navigation.navigate("BottomRoutes")  

        
      } catch (error) { 

        console.log(error)
        
      }finally{
        setLoading(false)
      }
      
      
  }
  

  
  return (
    <View style={styles.container}>
      <Hello/>
      <Input
      titleText='Email'
      inputText={setEmail}
      valor={email}
      iconNameRight={'user'}
      IconRight={FontAwesome}
      size={24}
      
      
      
      

      />
      
      <Input
      titleText={'Password'}
      inputText={setPass}
      valor={pass}
      iconNameRight={ver?'eye-slash':'eye'}
      IconRight={FontAwesome}
     
      setvalueIcon={()=>setVer(!ver)}
      size={22}
      valueIcon={ver}
      secureTextEntry={true}
      
      
      

      

      />
      
      <Btn
      text='Entrar'
      loading={loading}
      changePage={()=>Logar()}

      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15,
    paddingHorizontal:25
  },
});
