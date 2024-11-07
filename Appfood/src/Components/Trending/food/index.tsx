import { Pressable,Text,Image,View } from 'react-native';
import { Ionicons,Feather, FontAwesome } from '@expo/vector-icons';
import  {FoodProps} from ".."



export  function CardFood({food}:{food: FoodProps}) {
 return (
   <Pressable className='flex w-44 h-44 rounded-3xl relative '>
    <Image
    source={{uri:food.image}}
    className='w-44 h-36 rounded-2xl'
    />

    <View className='flex flex-row bg-slate-700/80 w-fit rounded-2xl justify-center gap-1 items-center absolute top-2 right-2 px-2 py-1'>
        <FontAwesome name='star' size={20} color={'#d4ac0d'} />
        <Text>{food.rating}</Text>

    </View>
    <Text>
        {food.name}
    </Text>
    

   </Pressable>
  );
}