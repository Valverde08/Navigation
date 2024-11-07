import {Text, View, Pressable, } from "react-native";


interface Props{
    name: string;
    label:string;
    action: ()=>void;
    size: "text-lg" | "text-xl" | "text-2xl"

}

export function Section({name,label,action,size}:Props){
    return(
        <View className="w-full flex-row  items-center justify-between px-4">
            <Text className={`${size} self-start font-semibold `}>
                {name}
            </Text>
            <Pressable onPress={action}>
                <Text>{label}</Text>
            </Pressable>
            
        </View>
    )
}
