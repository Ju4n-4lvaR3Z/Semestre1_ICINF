import React from "react";
import { StyleSheet, Pressable } from "react-native";

const styles=StyleSheet.create({
    button:{
        
    }
})
const StyledButtonMain=({style={},children, ...props})=>{

    const buttonStyle={
        ...styles.button,
        ...style,
    }
    return <Pressable style={buttonStyle} {...props}>{children}</Pressable>
}
export default StyledButtonMain