import {React} from "react";
import {StyleSheet, View } from "react-native";
import StyledButtonMain from "./styles/StyleButtonMain"
import StyledText from "./styles/StyleText";
import Constants from 'expo-constants'
import SvgTest from "./styles/SVGTest";
import SvgTest2 from "./styles/SVGTest2";
import Chat from "./chat";

const Main =()=>{
    return(
        <View style={styles.container}>
            <View style={{ width: 385, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginTop:Constants.statusBarHeight,marginLeft:15,marginRight:15,}}>
                <StyledButtonMain>
                    <SvgTest />
                </StyledButtonMain>
                <StyledButtonMain>
                    <SvgTest2 />
                </StyledButtonMain>
            </View>
            <StyledText>
                App Main
            </StyledText>
            <View >
            <Chat/>
            </View>
        </View>
    )
}
export default Main
const styles = StyleSheet.create({
    container: {alignItems: 'center',flex:1,justifyContent:'space-between',backgroundColor:'#1F2227'},

})