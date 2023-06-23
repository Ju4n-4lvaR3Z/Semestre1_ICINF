import React from "react";
import { StyleSheet, Pressable,TouchableOpacity } from "react-native";

const styles=StyleSheet.create({
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
const StyledButton=({button,buttonCreated,children,})=>{

    const buttonStyle=[
        styles.button,
        buttonCreated && styles.buttonCreated,
    ]
    return <TouchableOpacity style={buttonStyle}>{children}</TouchableOpacity>
}
export default StyledButton