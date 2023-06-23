import React,{useState,} from "react";
import { Formik, useField } from "formik";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import StyledTextInput from "./styles/StyleTextInput";
import StyledText from "./styles/StyleText";
import Constants from 'expo-constants'
import SvgComponent from "./styles/SVGTest";
import axios from "axios";
import { Link,Navigator,useRouter } from "expo-router";
import { createValidationSchena } from "./validationSchemas/create";
import URI from "./ip/ip";
const FormikInputValue=({name, ...props})=>{
    const [field,meta,helpers]=useField(name)
    return (
        <>
        <StyledTextInput  
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText small error bold>{meta.error}</StyledText>}
        </>
    )
}
export default function Login() {
    const [body, setBody] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        carrera: "",
        password: "",
        rpassword: "",
    })
    // errores
    const [errorEmail,setErrorEmail]=useState(false)
    const [errorPass,setErrorPass]=useState(false)
    // creacion del usuario
    handleSubmit =async (values) => {
        const res=await axios.get(`${URI}/usuario/usuarios/email/${values.email}`);
        if (res.data=="") {
            if (values.password==values.rpassword) {
                await axios.post(`${URI}/usuario/usuarios`,{
                    nombres: `${values.nombres}`,
                    apellidos: `${values.apellidos}`,
                    email: `${values.email}`,
                    carrera: `${values.carrera}`,
                    password: `${values.password}`
                });
                router.push(href='/login?estado=creado')
                setErrorEmail(false)
                setErrorPass(false)
            }else{
                setErrorEmail(false)
                setErrorPass(true)
            }
        }else{
            setErrorEmail(true)
            setErrorPass(false)
        }
    }
    const router = useRouter()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: Constants.statusBarHeight, alignContent: 'center', alignItems: 'center' }}>
                <SvgComponent />
                <Text style={styles.titulo}>Bienvenido</Text>
            </View>
            <StyledText parrafo2>Para comenzar crea tu cuenta</StyledText>
            {errorEmail && <Text style={{color:'#B53F2D',marginTop:-18}}>Email ya registrado</Text>}
            {errorPass && <Text style={{color:'#B53F2D',marginTop:-18}}>Contaseñas no son las mismas</Text>}
            <Formik validationSchema={createValidationSchena} initialValues={body} on onSubmit={values=>
           { 
            handleSubmit(values)
           }
            }>
                {({handleSubmit})=>{
                    return (
                    <View>
                    <StyledText>Ingrese su nombres</StyledText>
                        <FormikInputValue 
                        name='nombres'
                        placeholder="Nombres"/>
                    <StyledText>Ingrese su apellidos</StyledText>
                        <FormikInputValue 
                        name='apellidos'
                        placeholder="Apellidos"/>

                    <StyledText>Ingrese su correo sin @ulagos.cl</StyledText>
                        <FormikInputValue 
                        name='email'
                        placeholder="E-mail"/>

                    <StyledText>Ingrese su carrrera</StyledText>
                        <FormikInputValue 
                        name='carrera'
                        placeholder="Carrera"/>

                    
                    <StyledText>Ingrese su contraseña</StyledText>
                        <FormikInputValue 
                        name='password'
                        secureTextEntry
                        placeholder="Password"/>

                    <StyledText>Repita su contraseña</StyledText>
                        <FormikInputValue 
                        name='rpassword'
                        secureTextEntry
                        placeholder="Repita Password"/>

                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <StyledText button>CREAR CUENTA</StyledText>
                        </TouchableOpacity>
                    </View>
                    )
                }}
            </Formik>
            <View style={{backgroundColor:'#1F2227'}}>
                <TouchableOpacity style={styles.buttonCreated}  onPress={()=>router.push(href='/login')}>
                    <StyledText button>¿Ya tienes una cuenta?</StyledText>
                </TouchableOpacity>
            </View>
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
        width:160,
        marginVertical:20,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#30676B"
    },
    buttonCreated:{
        borderRadius:25,
        height:50,
        width:260,
        marginVertical:15,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#5B924D",
    },
    titulo:{
        fontSize:30,
        color:"white",
        fontWeight:'bold',
        marginVertical:10,
        letterSpacing:5,
    },
})