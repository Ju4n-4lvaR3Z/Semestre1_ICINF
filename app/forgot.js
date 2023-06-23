import React,{useState,useEffect} from "react";
import { Formik, useField } from "formik";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import StyledTextInput from "./styles/StyleTextInput";
import StyledText from "./styles/StyleText";
import axios from "axios";
import SvgUla from "./styles/SvgULA";
import { Link,useRouter, useSearchParams } from "expo-router";
import URI from "./ip/ip";
import { forgot1ValidationSchena } from "./validationSchemas/forgot1";
import { forgot2ValidationSchena } from "./validationSchemas/forgot2";
// llamado al api de node

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
const [body,setBody]=useState({email:"",password:""})
const [pass,setPass]=useState({password:"",rpassword:""})
const [id,setID]=useState()
// errores
const [errorEmail,setErrorEmail]=useState(false)
const [errorPass,setErrorPass]=useState(false)
const [forgot,setForgot]=useState("")
// llamado al api de node
    const getUser=async (email) => {
        const res=await axios.get(`${URI}/usuario/usuarios/email/${email}`);
        if (res.data=="") {
            setErrorEmail(true)
        }else{
            const id=res.data.id
            setID(id)
            setErrorEmail(false)
            setForgot("1")
        }
    }
    const putPassword=async (password,rpassword) => {
        if (password!==rpassword) {
            setErrorPass(true)
        }else{
            await axios.put(`${URI}/usuario/usuarios/id/${id}`,{
                "password": `${password}`,
            });
            setForgot("2")


        }
    }

    const router = useRouter()
    return (
        <View style={styles.container}>
            <SvgUla />
            {forgot==""&&<StyledText titulo>Cambio de contraseña</StyledText>}
            {forgot=="1"&&<StyledText titulo>Cambio de contraseña</StyledText>}
            {forgot==""&&<StyledText parrafo>ingrese su correo</StyledText>}
            {forgot=="1"&&<StyledText parrafo>ingrese su nueva constraseña</StyledText>}
            {forgot=="2"&&<StyledText titulo>actualizada</StyledText>}
            {errorEmail && <Text style={{color:'#B53F2D',marginTop:-18}}>Email no encontrado</Text>}
            {errorPass && <Text style={{color:'#B53F2D',marginTop:-18}}>Contaseñas no son las mismas</Text>}
            {forgot=="" && <Formik validationSchema={forgot1ValidationSchena} initialValues={body} on onSubmit={values => {
                getUser(values.email);
            }
            }>
                {({ handleSubmit }) => {
                    return (
                        <View>
                    <StyledText>Ingrese su correo sin @ulagos.cl</StyledText>
                        <FormikInputValue 
                        name='email'
                        placeholder="E-mail"/>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <StyledText button>BUSCAR CORREO</StyledText>
                        </TouchableOpacity>
                    </View>
                    )
                }}
            </Formik>}
            {forgot=="1" && <Formik validationSchema={forgot2ValidationSchena} initialValues={pass} on onSubmit={values => {
                putPassword(values.password,values.rpassword);
            }
            }>
                {({ handleSubmit }) => {
                    return (
                        <View>
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
                        <TouchableOpacity style={styles.buttonc} onPress={handleSubmit}>
                            <StyledText button>NUEVA CONTRASEÑA</StyledText>
                        </TouchableOpacity>
                    </View>
                    )
                }}
            </Formik>}
            {forgot==""&&<View style={{backgroundColor:'#1F2227'}}>
                <TouchableOpacity style={styles.buttonCreated}  onPress={()=>router.push(href='/login')}>
                    <StyledText button>¿Te Acordaste?</StyledText>
                </TouchableOpacity>
            </View>}
            {forgot=="1"&&<View style={{backgroundColor:'#1F2227'}}>
                <TouchableOpacity style={styles.buttonCreated}  onPress={()=>router.push(href='/login')}>
                    <StyledText button>¿Te Acordaste?</StyledText>
                </TouchableOpacity>
            </View>}
            {forgot=="2"&&<View style={{backgroundColor:'#1F2227'}}>
                <TouchableOpacity style={styles.buttoncr}  onPress={()=>router.push(href='/login')}>
                    <StyledText button>Volver al login</StyledText>
                </TouchableOpacity>
            </View>}
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
        marginVertical:60,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#5B924D"
    },
    buttonc:{
        borderRadius:25,
        height:50,
        width:200,
        marginVertical:60,
        alignSelf:'center',
        textAlign:'center',
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#5B924D"
    },
    buttoncr:{
        borderRadius:25,
        height:50,
        width:200,
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