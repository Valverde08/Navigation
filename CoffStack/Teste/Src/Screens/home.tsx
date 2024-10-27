import React from "react";
import { View,Text } from "react-native";
import Btn from "../Componets/Btn";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation()
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'space-between',padding:25}}>
            <Text style={{textAlign:'center'}}>Esta telo so pode ser vista por usuários pré cadastrados.</Text>
            <Btn
            title="Settings"
            navigation={navigation}
            page='Settings'
            
            />
            <Text>By VINICIUS VALVERDE</Text>
        </View>
    )
}