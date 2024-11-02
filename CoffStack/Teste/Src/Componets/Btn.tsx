import React from "react";
import { Text,StyleSheet, Alert } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native-gesture-handler';


interface MyButton extends TouchableOpacityProps{
    title:string;
    entrar?:()=> void;
    
    


} 

export default function Btn({title,entrar,...rest}:MyButton){
    return(
        <TouchableOpacity 
        onPress={entrar}
        activeOpacity={0.5}
        style={styles.btn}>
        
            
            <Text style={styles.btn}>{title}</Text>
        </TouchableOpacity>
    )
}



const styles =  StyleSheet.create({
    btn:{
        width:200,
        height:50,
        backgroundColor:'#8221c4ac',
        borderRadius:5, justifyContent:'center',
        alignItems:'center'
    }, 
    Text:{
        fontSize:24,
        color:'white'
    }
})