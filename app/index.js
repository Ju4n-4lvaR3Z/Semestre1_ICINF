import { StyleSheet, Text,TouchableOpacity, View } from "react-native";
import { Link,useRouter } from "expo-router";
import SvgUla from "./styles/SvgULA";
// index donde se muestra la aplicacion al principio
export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={()=>router.push(href='/login')} style={styles.title}><SvgUla/></TouchableOpacity>
        <View style={{flexDirection:'row'}}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor:'#1F2227'
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
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
});
