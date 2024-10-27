import React from "react";
import { FlatList, Text,View } from "react-native";
import Input from "../../Components/Input";
import { estilos } from "./style";
import {MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import Circle from "../../Components/CIrcle";
import { estilo } from "../../Components/Tabs/style";
import Flalg from "../../Components/Flag";

type dataArray= {
    index:string,
    title:string,
    description:string,
    flag: 'urgente' | 'opcional'
}
const data:Array<dataArray>  = [
    {
        index:'0',
        title:'Atividade principal',
        description:'Fazer estudos matinais',
        flag:'opcional'

    },
    {
        index:'1',
        title:'Atividade principal',
        description:'Fazer estudos matinais',
        flag:'urgente'
    },
    {
        index:'2',
        title:'Atividade principal',
        description:'Fazer estudos matinais',
        flag:'urgente'
    },
    {
        index:'3',
        title:'Atividade principal',
        description:'Fazer estudos matinais',
        flag:'urgente'
    }
]

export default function List() {
    const renderCard= (item:dataArray)=> {
        return(
            <View style={estilos.Card}>
                <TouchableOpacity style={estilos.Circle}>
                    <Circle
                    
                    />
                </TouchableOpacity>
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                
                </View>
                    <Flalg
                    color="red"
                    caption={item.flag}
                    />
                

                <View>
                    
                
                </View>
            </View>
        )

    }
    return(
        <View style={estilos.container}>
            <View style={estilos.headerView}>
                <Text style={estilos.headerText}>Bom dia, Vinicius</Text>
                <View style={estilos.viewContainer}>
                    <Input
                    IconLeft={MaterialIcons}
                    iconNameLeft={'search'} 
                    
                    />
                </View>

            </View>
            <View style={estilos.flalistView}>
                <FlatList
                style={{paddingTop:20,marginHorizontal:20}}
                data={data}
                keyExtractor={(item,index)=>item.index}
                renderItem={({item,index})=>{
                    return renderCard(item)}}
                />

            </View>
        </View>

    )
}
