import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../Pages/Login/index'
import BottomRoutes from './bottomroutes'



const Stack = createStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown:false,
            cardStyle:{
                backgroundColor:'#fff'
            }

        }}
        >
            <Stack.Screen
            name="Login"
            component={Login}
            />
            <Stack.Screen
            name="BottomRoutes"
            component={BottomRoutes}
            />
        </Stack.Navigator>

    )
}