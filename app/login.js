// importamos todo lo nesesario de react, formik, los estilos personalisados, el eschema de validacion de login, axios, el SVG de la ula, los routes de expo routes
import React,{useState,useEffect} from "react";
import { Formik, useField } from "formik";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import StyledTextInput from "./styles/StyleTextInput";
import StyledText from "./styles/StyleText";
import { loginValidationSchena } from "./validationSchemas/login";
import axios from "axios";
import SvgUla from "./styles/SvgULA";
import { Link,useRouter, useSearchParams } from "expo-router";
import URI from "./ip/ip";
// llamado al api de node
// creamos el forulatio perosnalisado
const FormikInputValue=({name, ...props})=>{
    const [field,meta,helpers]=useField(name)
    return (
        <>
        <StyledTextInput  
            error={meta.error}
            value={field.value} 
            onChangeText={value=> helpers.setValue(value)}
            {...props}
        />
        {meta.error && <StyledText small error bold>{meta.error}</StyledText> }
        </>
        )
}
export default function Login (){
    // definimos la variables
const [body,setBody]=useState({email:"",password:""})
const [users,setUser]=useState([])
// errores
const [errorEmail,setErrorEmail]=useState(false)
const [errorPass,setErrorPass]=useState(false)
// llamado al api de node
    const getUser=async (email,password) => {
        // llamamod al api de node
        const res=await axios.get(`${URI}/usuario/usuarios/email/${email}`);
        if (res.data=="") {
            setErrorEmail(true)
            setErrorPass(false)
        }else if(res.data.password===password){
            if(!res.data.id_asistente==""){
                router.push(href={pathname:'/menu_chat',params:{user:res.data.id}})
                
            }else{
                router.push(href={pathname:'/tutorial1',params:{user:res.data.id}})
            }

        }else if(res.data.password!==password){
            setErrorEmail(false)
            setErrorPass(true)
        }
    }
// llamamos al router
    const router = useRouter()
    const estado =useSearchParams()
    // creamos la pagina
    return (
        <View style={styles.container}>
            <SvgUla />
            <StyledText titulo>HOLA</StyledText>
            <StyledText parrafo>Bienvenido a tu asistente virtual</StyledText>
            {errorEmail && <Text style={{color:'#B53F2D',marginTop:-18}}>Email no encontrado</Text>}
            {errorPass && <Text style={{color:'#B53F2D',marginTop:-18}}>contraseña Incorrecta</Text>}
            <Formik validationSchema={loginValidationSchena} initialValues={body} on onSubmit={values => {
                getUser(values.email,values.password);
            }
            }>
                {({ handleSubmit }) => {
                    return (
                        <View>
                        {/* campos de ingreso de datos */}
                    <StyledText>Ingrese su correo sin @ulagos.cl</StyledText>
                        <FormikInputValue 
                        name='email'
                        placeholder="E-mail"/>
                    <StyledText>Ingrese su contraseña</StyledText>
                        <FormikInputValue 
                        name='password'
                        secureTextEntry
                        placeholder="Password"/>
                        {errorPass && <TouchableOpacity style={{alignSelf:'center',marginBottom:-17}} onPress={()=>router.push(href='/forgot')}><Text style={{color:'#B53F2D'}}>¿Te olvidaste de la contraseña?</Text></TouchableOpacity>}
                        {estado.estado=="creado" && <Text style={{alignSelf:'center',color:'#5B924D'}}>CUENTA CREADA</Text>}
                        {/* boton que al validar inicioa seseion */}
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <StyledText button>INICIAR SESION</StyledText>
                        </TouchableOpacity>
                    </View>
                    )
                }}
            </Formik>
            <View style={{backgroundColor:'#1F2227'}}>
            {/* botton de crear cuenta */}
                <TouchableOpacity style={styles.buttonCreated}  onPress={()=>router.push(href='/create')}>
                    <StyledText button>¿No tienes una cuenta?</StyledText>
                </TouchableOpacity>
            </View>
        </View>
    )
}
// estilos de la pagina
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
        width:160,
        marginVertical:60,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#5B924D"
    },
    buttonCreated:{
        borderRadius:25,
        height:50,
        width:260,
        marginVertical:-30,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#24272D",
    }
})