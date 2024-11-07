import { View, Pressable, Alert, Image, TextInput} from "react-native";
import {Ionicons, Feather} from "@expo/vector-icons"


export function Inpt(){
    return(
        <View className="flex-row border border-slate-400 w-full h-14 md:h-20 rounded-3xl mb-4 mt-5 justify-start gap-3  items-center px-4">
            <Feather name="search" color={'bLack'} size={24}/>

           <TextInput
           placeholder="Procure por sua comida..."
           className="flex-1 w-full h-full bg-transparent"
           />
        </View>
    )
}
