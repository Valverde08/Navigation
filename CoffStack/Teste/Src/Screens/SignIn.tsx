import React, { useContext, useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import Btn from "../Componets/Btn";
import Inpt from "../Componets/Inpt";
import { useNavigation } from "@react-navigation/native";
import {  useAuth } from "../Context/AuthContext";


export default function SignIn(){
    const [email, SetEmail] = useState<string>('')
    const [pass, SetPass] = useState<string>('')
    const {signin} = useAuth()
    return(
        <View style={styles.container}>
            <Inpt
            placeholder="E-mail"
            placeholderTextColor={'gray'}
            onChangeText={SetEmail}
            value={email}
            />
            <Inpt
            placeholder="Password"
            placeholderTextColor={'gray'}
            onChangeText={SetPass}
            value={pass}
            />
            <Btn
            title="Entrar"
            onPress={()=>signin(email,pass)}
            page='Home'
            
            />
            <Text>{email}</Text>
            <Text>{pass}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:25,
      gap:15
    },
  });