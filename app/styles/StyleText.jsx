import React from "react";
import { Text,StyleSheet } from "react-native";

const style= StyleSheet.create ({
    text:{
        fontSize:12,
        color:'#FFFFFF'
    },
    bold:{
        fontWeight:'bold'
    },
    blue:{
        color:'blue'
    },
    big:{
        fontSize:20
    },
    small:{
        fontSize:10
    },
    error:{
        color:'#B53F2D',
        marginTop:-18,
        marginBottom:3,
        position:'relative'
    },
    button:{
        alignSelf:'center',
        fontSize:15,
        letterSpacing:3
    },
    titulo:{
        fontSize:30,
        marginBottom:20,
        letterSpacing:5
    },
    parrafo:{
        fontSize:15,
        marginBottom:40,
    },
    parrafo2:{
        fontSize:15,
        margin:30,
    }
})
export default function StyledText({blue,bold,big,children,small,error,button,titulo,parrafo,parrafo2}){
    
    const textStyle=[
        style.text,
        bold && style.bold,
        blue && style.blue,
        big && style.big,
        small && style.small,
        error && style.error,
        button && style.button,
        titulo && style.titulo,
        parrafo && style.parrafo,
        parrafo2 && style.parrafo2 
    ]
    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}