import { TextInput, Text, View, TextInputProps, TouchableOpacity, Pressable } from "react-native";
import {FontAwesome,MaterialIcons,Octicons} from '@expo/vector-icons';
import { estilos } from "./style";

import React from "react";

type IconType = 
    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;


type Props = TextInputProps & {
    titleText?:string,
    inputText:(text:string)=>void,
    valor:string,
    IconLeft?:IconType,
    IconRight?:IconType,
    iconNameLeft?:any,
    iconNameRight?:any,
    size?:number,
    valueIcon?:boolean,
    setvalueIcon?:()=>void
    
}

export default function Input(Props:Props){

    const inputwidth =()=> {
        if(IconLeft && IconRight)
            return '85%'
        if(IconLeft || IconRight)
            return '90%'
        else
            return'95%'
    }

    const inputpadding =()=> {
        if(IconLeft && IconRight)
            return 10
        if(IconLeft || IconRight)
            return 15
        else
            return 0
    }

    const {titleText,inputText,valor,IconLeft,IconRight, iconNameLeft,iconNameRight,valueIcon,setvalueIcon,size, ...rest} = Props

    
    
    return(
        <View >
           {titleText && <Text>{titleText}</Text>}
            <View style={[estilos.inputWrapp,{width:inputwidth()},{paddingHorizontal:inputpadding()}]}>
                {IconLeft && iconNameLeft &&(
                    <TouchableOpacity >
                        <IconLeft name={iconNameLeft} size={24} color={'gray'}/>
                    </TouchableOpacity>
                )}
                <TextInput
                style={estilos.inputcontent}
                onChangeText={(item)=>inputText(item)}
                value={valor}
                


                
                
                />
                {IconRight && iconNameRight &&(
                    <TouchableOpacity onPress={setvalueIcon}>
                        <IconRight name={iconNameRight} size={size} color={'black'}/>
                    </TouchableOpacity>
                )}
                
            </View>
        </View>
    )
}