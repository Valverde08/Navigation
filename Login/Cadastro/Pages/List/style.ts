import { Dimensions, StyleSheet } from "react-native";


export const estilos = StyleSheet.create({
    container:{

        flex:1,
        alignItems:'center',
        width:'100%'
    

    },
    headerText:{
        fontSize:20,
        color:'white',
        paddingBottom:5
    },
    headerView:{
        height:Dimensions.get("window").height/5,
        backgroundColor:'#5735d1',
        width:'100%',
        justifyContent:'center',
       alignItems:'flex-start',
       paddingHorizontal:20

    },
    viewContainer:{
        width:'80%',
        alignItems:'flex-start'
        
        
    },
    flalistView:{
        width:'100%',
        
        
    },
    Card:{
        width:'100%',
        alignItems:'center',
        height:60,
        justifyContent:"space-between",
        marginBottom:10,
        borderRadius:10,
        padding:10,
        backgroundColor:"#fff",
        flexDirection:'row',
        borderWidth:1,
        borderColor:'gray'

        
    },
    Circle:{
        justifyContent:'center'
    }

})