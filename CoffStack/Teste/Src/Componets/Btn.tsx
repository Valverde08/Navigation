import React from "react";
import { Text,StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";


interface MyButton extends TouchableOpacityProps{
    title:string;
    navigation?:any;
    changePage?:()=>void
    page?:string


} 

export default function Btn({title,navigation,page,...rest}:MyButton){
    return(
        <TouchableOpacity 
        onPress={()=>navigation.navigate(page)}
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