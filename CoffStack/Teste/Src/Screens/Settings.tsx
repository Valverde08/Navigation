import React from "react";
import { View,Text, Alert } from "react-native";
import Btn from "../Componets/Btn";
import { useNavigation } from "@react-navigation/native";

export default function Settings(){
    const navigation =useNavigation()
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'space-between',padding:25}}>
            <Text style={{textAlign:'center'}}>Página de Configurações</Text>
            <Btn
            title="Home"
            onPress={()=>Alert.alert("oi","oi")}
            />
            <Text>By VINICIUS VALVERDE</Text>
        </View>
    )
}