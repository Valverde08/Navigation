import React,{createContext, useContext} from "react";
import { Alert } from "react-native";

export const AuthContextList:any = createContext({})

export const AuthProviderList = (props:any):any =>{
    const openModal=()=>{
        Alert.alert('Modal Aberto', 'Modal Aberto com Sucesso')
    }
    return(
        <AuthContextList.Provider value={{openModal}}>
            {props.children}
        </AuthContextList.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContextList)