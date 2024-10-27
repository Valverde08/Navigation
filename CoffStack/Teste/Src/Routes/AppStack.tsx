import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/home";
import Settings from "../Screens/Settings";

const Stack = createNativeStackNavigator()


export default function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            />
            <Stack.Screen
            name="Settings"
            component={Settings}
            />
        </Stack.Navigator>

    )
}