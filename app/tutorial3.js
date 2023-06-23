// importamos react y styled-components
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View,TextInput,Text } from "react-native";
import StyledText from "./styles/StyleText";
import axios from "axios";
import SvgUla from "./styles/SvgULA";
import SvgPerson from "./styles/SVGperson";
import URI from "./ip/ip";
import { useRouter,useSearchParams } from "expo-router";
export default function Login (){
    // importamos el router
    const router=useRouter()

    const props =useSearchParams()
    console.log(props)
// definimos variables
    // error
    const [nombreEr, setNombreEr] = useState(false);
    const [seguro, setSeguro] = useState(false);
    const [persoBot, setpersoBot] = useState();

    const [textInput, setTextInput] = useState('');
    // handler de guarda la personalindad del bot
    const handle=()=> {
        if (!textInput== '') {
            setNombreEr(false)
            setSeguro(true)
            setpersoBot(textInput)
        } else {
            setNombreEr(true)
        }
    }
    const handleSubmit=()=> {
        if (textInput==persoBot) {
            setNombreEr(false)
            setSeguro(false)
            createAsistent()
        } else {
            setNombreEr(true)
            setSeguro(false)
        }
    }
    const createAsistent= async()=> {
        // inportamos la url de la api de node para crear el bot
        await axios.post(`${URI}/usuario/asistente/asistente/`,{
            "nombre": `${props.nombre}`,
            "voz": null,
            "personalidad": `${persoBot}`,
            "imagen": null
        });
        // definimos el bot a nobre del usuario
        const res=await axios.get(`${URI}/usuario/asistente/last`);
        const bot=res.data;
        const botData=bot[0]
        console.log(botData.id)
        await axios.put(`${URI}/usuario/usuarios/${props.user}`,{
            "id_asistente": botData.id,
        });
        router.push(href={pathname:"/menu_chat",params:{
            id:props.user,
        }})
    }
    return(
        <View style={styles.container}>
            <SvgUla/>
            <SvgPerson/>
            <StyledText parrafo>Ingrese La personalidad de  ' {props.nombre} '</StyledText>
            {nombreEr && <Text style={{color:'#B53F2D',marginTop:-18}}>Ingrese la personalidad</Text>}
{/* ingresa la personalidad */}
            <TextInput
            style={styles.textInput} 
            value={textInput} 
            onChangeText={text => {
                setTextInput(text)
                }} 
// activa el boton qu elleva a chat y activa handle
            placeholder="Ingrese el nombre de su asistente"/>
            {seguro&&<View><TouchableOpacity style={styles.buttons} onPress={()=>{handleSubmit()}}><StyledText button>¿Esta seguro?</StyledText></TouchableOpacity></View>}
            {!seguro&&<TouchableOpacity style={styles.button} onPress={()=>{handle()}}><StyledText button>Coloque la personalidad</StyledText></TouchableOpacity>}
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