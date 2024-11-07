import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { CardFood } from './food';


export interface FoodProps{
    id:string;
    name:string;
    price:number;
    time:string;
    delivery:number;
    rating:number;
    image:string;
    restaurantId:string

}
export function Trending() {
    const [foods,Setfoods] = useState<FoodProps[]>([])

    useEffect(()=>{
        async function getFoods(){
            const response = await fetch("http://192.168.1.11:3000/foods")
            const data = await response.json()
            console.log(data);
            Setfoods(data)
            

        }

    getFoods()   
    },[])
 return (
   
    <FlatList
    className='px-4'
    data={foods}
    renderItem={({item})=> <CardFood food={item}/>}
    horizontal={true}
    contentContainerStyle={{gap:10}}
    showsHorizontalScrollIndicator={false}
    />

   
  );
}
