import React from "react";
import { Text,View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {FontAwesome,MaterialIcons,Octicons} from '@expo/vector-icons';
import { estilo } from "./style";


export default function TabCustom() {
    return(
        <View style={estilo.tabWrapple}>
            <TouchableOpacity 
            activeOpacity={0.5}>
                <FontAwesome
                name="navicon" size={24} color={'gray'}
                />
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.5}>
            <FontAwesome
                name="navicon" size={24} color={'gray'}
                />
                
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.5}>
            <FontAwesome
                name="navicon" size={24} color={'gray'}
                />
                
            </TouchableOpacity>
        </View>

    )
}

