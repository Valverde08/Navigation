import React from "react";
import { Alert, Text,View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {FontAwesome,MaterialIcons,Octicons} from '@expo/vector-icons';
import { estilo } from "./style";


export default function TabCustom({state,navigation}) {
    const navegar = (pagina:string)=>{

        navigation.navigate(pagina)

    }
    return(
        <View style={estilo.tabWrapple}>
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={()=>navegar('List')}
            
            >

                <FontAwesome
                name="navicon" size={24} color={state.index === 0?'purple':'grey'}
                />
            </TouchableOpacity>
            <View style={{backgroundColor:'#5735d1',height:70, width:70,borderRadius:35, bottom:40,flexDirection:'column-reverse',
        
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.43,
                    shadowRadius: 9.51,
                    
                    elevation: 15,
                    }}>
                <TouchableOpacity
                    
                    activeOpacity={0.5}>
                <FontAwesome
                    style={{left:15,bottom:8,position:'relative'}}
                    name="plus" size={24} color={'white'}
                    />
                <FontAwesome
                    style={{left:35,bottom:10,position:'relative'}}
                    name="pencil" size={24} color={'white'}
                />
                
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={()=>navegar('User')}
            activeOpacity={0.5}>
            <FontAwesome
                name="user" size={24} color={state.index === 1?'purple':'grey'}
                />
                
            </TouchableOpacity>
        </View>

    )
}

