import React from "react";
import { View,Text, Alert } from "react-native";
import Btn from "../Componets/Btn";



export default function Home(){
    
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'space-between',padding:25}}>
            <Text style={{textAlign:'center'}}>Esta telo so pode ser vista por usuários pré cadastrados.</Text>
            <Btn
            title="Settings"
            onPress={()=>Alert.alert("oi","oi")}
            
            
            />
            <Text>By VINICIUS VALVERDE</Text>
        </View>
    )
}