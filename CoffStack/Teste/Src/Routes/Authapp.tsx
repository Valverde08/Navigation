import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../Screens/SignIn";

const Stack = createNativeStackNavigator()


export default function Authapp(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown:false}}
            />
        </Stack.Navigator>

    )
}