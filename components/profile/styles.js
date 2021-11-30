import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
wrapper: {
  flex: 1,
  margin: 20,
  backgroundColor: "white",
  flexDirection: "column",
},
headerContainer: {
width: "100%",
height: 200,
justifyContent: "center",
flexDirection: "row",

},
imageContainer: {
 
  width: 160,
  height: 200,
  
},
image: {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'cover',
  borderRadius: 40,
  // paddingTop: 00,
},
  
  });

export default styles;
