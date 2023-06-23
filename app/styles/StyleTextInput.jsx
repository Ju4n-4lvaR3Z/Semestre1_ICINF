import React from "react";
import { TextInput,StyleSheet } from "react-native";

const styles=StyleSheet.create({
    textInput:{
        width:300,
        textAlign:'center',
        backgroundColor:'#C9C9C9',
        borderColor:'#69696A',
        borderRadius:10,
        borderWidth:1,
        paddingHorizontal:20,
        paddingVertical:5,
        marginBottom:17,
    },
    error:{
        borderColor:'#B53F2D',
        borderWidth:2,
    }
})
const StyledTextInput=({style={}, error, ...props})=>{
    const inputStyle=[
        styles.textInput,
        style,
        error && styles.error
    ]
    return <TextInput style={inputStyle} {...props}></TextInput>
}
export default StyledTextInput