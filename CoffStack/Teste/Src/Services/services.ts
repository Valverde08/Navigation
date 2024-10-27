import { AuthData } from "../Context/AuthContext";



async function signin(email:string, pass:string):Promise<AuthData>{
    return new Promise((res,rej)=>{

        setTimeout(() => {
            if(pass == '123456'){
                res({
                    token: 'fake-token',
                    email,
                    name:'Vinicius Valverde'
                })
            } else{
                rej(new Error('Credenciais Incorretas'))
            }
        }, 500);

    })

}

export const Services = {signin}