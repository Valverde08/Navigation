import React, { createContext, useContext, useState } from "react";
import { Services } from "../Services/services";


export interface AuthData{
    
        token:string;
        email:string;
        name:string; 

    

}
interface AuthContextData{
    auth ?: AuthData

    signin:(email:string, pass:string)=> Promise<AuthData>,
    signout:()=> void

}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData )
    
export const AuthProvider:React.FC<{children?: React.ReactNode}> = ({children})=>{
    const [auth, setAuth] = useState<AuthData>()

    async function signin(email:string, pass:string):Promise<AuthData>{
        //Chamar Api
        const service =  await Services.signin(email, pass)

        setAuth(service)

        return service
    }

    async function signout(): Promise<void>{
        //faz logout 
        setAuth(undefined)   
    }

   
    return(
        <AuthContext.Provider value={{auth, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const  context = useContext(AuthContext)

}