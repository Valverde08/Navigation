import { Text, ScrollView, View } from "react-native";
import { Header } from "../Header";
import Constants from "expo-constants"
import { Banner } from "../Components/Banner";
import { Inpt } from "../Components/Search";
import { Section } from "../Components/Section";
import { Trending } from "../Components/Trending";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}  
    style={{flex:1}} 
    className="bg-slate-300 " >
      
      <View className="w-full px-4" style={{marginTop:statusBarHeight + 8}}>
        <Header/>
      
        <Banner/>
      
        <Inpt/>
      </View>
      <Section
      name="Novidades"
      label="Veja mais"
      action={()=>console.log("teste")}
      size="text-2xl"
      />

      <Trending/>


    </ScrollView>
  );
}
