import { View,Pressable,Text } from "react-native";
import {Ionicons, Feather} from "@expo/vector-icons"

export function Header(){
    return(
        <View className=" w-full items-center justify-between flex-row" >
            <Pressable className="w-10 h-10 bg-white justify-center items-center rounded-full ">
                <Ionicons name="menu" size={24} color={'black'}/>
            </Pressable>
            <View className="flex flex-col justify-center  items-center">
                <Text>Localização</Text>
                <Pressable className=" text-nowrap flex-row  h-10 justify-center items-center rounded-full ">
                    <Feather name="map-pin" size={24} color={'red'}/>
                    <Text className="text-lg font-bold">Salvador</Text>
                </Pressable>
                
            </View>
            <Pressable className="w-10 h-10 bg-white justify-center items-center rounded-full ">
                <Feather name="bell" size={24} color={'black'}/>
            </Pressable>
        </View>
    )
}