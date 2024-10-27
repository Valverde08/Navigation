import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import Authapp from "./Authapp";
import { AuthContext } from "../Context/AuthContext";



export default function Routes(){
    const auth = useContext(AuthContext)
    return(
        <NavigationContainer>
            {auth.auth? <AppStack/>:<Authapp/>}
        </NavigationContainer>
    )
}