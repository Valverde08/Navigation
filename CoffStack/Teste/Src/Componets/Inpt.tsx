import React from "react";
import { Text,StyleSheet,  TextInput, TextInputProps } from "react-native";




export default function Inpt(props:TextInputProps){
    return(
        <TextInput
        style={styles.Inpt}
        {...props}
        />
    )
}



const styles =  StyleSheet.create({
    Inpt:{
        width:'100%',
        height:50,        
        borderRadius:5, 
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'black',
        padding:5
    }
})