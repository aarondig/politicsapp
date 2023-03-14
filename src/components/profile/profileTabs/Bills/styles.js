import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

    backgroundColor: "white",
    flexDirection: "column",
  },

  innerWrapper: {
    flex: 1,
    flexDirection: "column",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "8%",
  },
  carousel: {


    display: "flex",
    flexDirection: "column",

    paddingTop: 32,
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEEF1",

},
carouseltitle: {
  color: "#111315",
  fontSize: 16,
  fontFamily: "System",
  fontWeight: "600",
  paddingBottom: 6,
    paddingLeft: 24,
    paddingRight: 24,
  letterSpacing: .2,
  
},
cardscroll: {
  display: "flex",
flexDirection:"row",
paddingTop: 20,
paddingBottom: 20,
paddingLeft: 24,
// scrollPadding: 100,
  // backgroundColor: "#EFEEF1"
},
card: {
  height: 145,
  minWidth: 220,
  maxWidth: 220,
  borderRadius: 8,
  marginRight: 6,
  borderWidth: 1,
  borderColor: "#EFEEF1",
  
},

innercard: {
  display: "flex",
  flexDirection:"column",
  padding: 16,
  justifyContent:"space-between",
  
},
cardicon: {
  width: 40,
  height:40,
},
icon: {
  display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height:40,
    borderRadius: 100,
    backgroundColor: "#111315",
    marginRight:12,

}, 
row: {
  display: "flex",
  flexDirection:"row",
  alignItems: "center",
  justifyContent: "space-between",
},

textc: {
  // display: "flex",
  // flexDirection:"column",
  // alignItems: "center",
  paddingTop:18,
  paddingBottom:12,
},
title: {
  color: "#111315",
  fontSize: 16,
  fontFamily: "System",
  fontWeight: "600",
  paddingBottom: 6,
  letterSpacing: .2,
  
},
subtitle: {
  color: "#AFB1B7",
  fontSize: 16,
  fontFamily: "System",
  fontWeight: "400",
  letterSpacing: .2,
  
},
icon: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height:40,
    borderRadius: 100,
    backgroundColor: "#375C56",
    marginRight:12,

});

export default styles;
