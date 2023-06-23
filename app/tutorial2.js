// importamos reatr y los estilos   
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View,TextInput,Text } from "react-native";
import StyledText from "./styles/StyleText";
import SvgUla from "./styles/SvgULA";
import SvgPerson from "./styles/SVGperson";
import { useRouter,useSearchParams } from "expo-router";
export default function Login (){
    //definimos routes de expo
    const router=useRouter()
    const props =useSearchParams()
    console.log(props)
    //definimos la variables
    // error
    const [nombreEr, setNombreEr] = useState(false);
    const [seguro, setSeguro] = useState(false);
    const [nombreBot, setnombreBot] = useState();

    const [textInput, setTextInput] = useState('');
    // handle el que se encarga de guardar el nombre del bot y guardarlo
    const handle=()=> {
        if (!textInput== '') {
            setNombreEr(false)
            setSeguro(true)
            setnombreBot(textInput)
        } else {
            setNombreEr(true)
        }
    }
    const handleSubmit=()=> {
        if (textInput==nombreBot) {
            setNombreEr(false)
            setSeguro(false)
            router.push(href={pathname:"/tutorial3",params:{
                ...props,
                nombre:nombreBot
            }})
        } else {
            setNombreEr(true)
            setSeguro(false)
        }
    }
    return(
        <View style={styles.container}>
            <SvgUla/>
            <SvgPerson/>
            <StyledText parrafo>Ingrese el nombre de su asistente virtual</StyledText>
            {nombreEr && <Text style={{color:'#B53F2D',marginTop:-18}}>Ingrese el nombre</Text>}
{/* input del nombre del bot */}
            <TextInput
            style={styles.textInput} 
            value={textInput} 
            onChangeText={text => {
                setTextInput(text)
                }} 
// botones para guardar el monbre
            placeholder="Ingrese el nombre de su asistente"/>
            {seguro&&<View><TouchableOpacity style={styles.buttons} onPress={()=>{handleSubmit()}}><StyledText button>¿Esta seguro?</StyledText></TouchableOpacity></View>}
            {!seguro&&<TouchableOpacity style={styles.button} onPress={()=>{handle()}}><StyledText button>Coloque el nombre</StyledText></TouchableOpacity>}
        </View>
    )
}
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
        width:250,
        marginVertical:60,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#5B924D"
    },
    buttons:{
        borderRadius:25,
        height:50,
        width:250,
        marginVertical:60,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#E5B242"
    },
    textInput:{
        width:300,
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'#C9C9C9',
        borderColor:'#69696A',
        borderRadius:10,
        borderWidth:1,
        paddingHorizontal:20,
        paddingVertical:5,
        marginBottom:17,
    },
})