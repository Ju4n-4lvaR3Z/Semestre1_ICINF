// importamos reatr y los estilos
import React from "react";
import { StyleSheet,TouchableOpacity, View } from "react-native";
import StyledText from "./styles/StyleText";
import SvgUla from "./styles/SvgULA";
import { useRouter,useSearchParams } from "expo-router";
export default function Login (){
    const router=useRouter()
    // esta pagina es solo de tutorial
    const props =useSearchParams()
    const Submit=()=>{
        router.push(href={pathname:'/tutorial2',params:{user:props.user}})
    }
    return(
        <View style={styles.container}>
            <SvgUla/>
            <StyledText parrafo>Bienvenido a tu asistente virtual de la Universidad de Los Lagos</StyledText>
            <View>
            <StyledText parrafo>Creemos a tu asistente en 4 simples pasos</StyledText>
            <StyledText parrafo>1.-El nombre de tu asistente</StyledText>
            <StyledText parrafo>2.-La cara de tu asistente...no imptlementado</StyledText>
            <StyledText parrafo>3.-La personalidad de tu asistente</StyledText>
            <StyledText parrafo>4.-La voz de tu asistente...no imptlementado</StyledText>
            </View>
{/* boton que lleva a tutorial2 */}
            <TouchableOpacity style={styles.button} onPress={()=>Submit()}><StyledText button>Crea tu assistente</StyledText></TouchableOpacity>
        </View>
    )
}
// estilods
const styles=StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems:'center',
    backgroundColor:'#1F2227'
  },
    button:{
        borderRadius:25,
        height:50,
        width:180,
        marginVertical:60,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#5B924D"
    }
})