import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  
  
  
  
  
  wrapper: {
    height: "100%",
    backgroundColor: "white",
    
  },
page: {
flex: 1,

alignContent: "center",
flexDirection: "column",

},

pageAfter: {
  flex: null
},

section: {
  display: "flex",
  flexDirection:"column",

  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 24,
  paddingBottom: 24,
  borderBottomWidth: 1,
  borderBottomColor: "#EFEEF1",
  // alignItems: "center"
    },
pagetitle: {
  color: "#111315",
      fontSize: 24,
      fontFamily: "System",
      fontWeight: "500",
      paddingBottom: 18,
      alignItems: "center",

},

searchbar: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
height: 45,
// margin: 24,
borderWidth: 1,
padding: 12,
// borderRadius: 12,
borderRadius: 100,
borderColor: "#EAEAED",
justifyContent: "flex-start",
},
searchbaricon: {
padding: 0,
margin: 0,
paddingRight: 12,
},
placeholder: {
  color: "#AFB1B7",
},
input: {
minHeight: 60,
minWidth:"80%",
},
  // inputBefore: {
   
  //   height: 60,
  // margin: 20,
  // borderWidth: 1,
  // padding: 10,
  // borderRadius: 100,
  // borderColor: "#EFEEF1",
  // },
     
  // inputAfter: {
  //   height: 60,
  // margin: 20,
  // borderWidth: 1,
  // padding: 10,
  // borderRadius: 12,
  // borderColor: "#EFEEF1",
  // },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  
 
    card: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      shadowColor: "#000",
      paddingLeft: 24,
      paddingRight: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#EFEEF1",
      paddingTop: 24,
      paddingBottom: 24,
    },
    column: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    tags: {
  
      display: "flex",
      flexDirection: "row",

    },
    tag: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 5,
      paddingBottom: 5,
      borderColor: "#EFEEF1",
      borderRadius: 100,
      borderWidth: 1,
      marginRight: 8,
      // flex: 1,

    },
    tagtext : {
      color: "#AFB1B7",
      fontSize: 14,
      fontWeight: "500",
    },


    titleContainer: {
      height: 50,
      flex: 1,
      flexDirection: "column",
      justifyContent:"center",
      marginBottom: 10,
    },


    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      color: "#111315",
      fontSize: 16,
      fontFamily: "System",
      fontWeight: "600",
      paddingBottom: 6,
      
    },
    subtitle: {
      color: "#AFB1B7",
      fontSize: 16,
      fontFamily: "System",
      fontWeight: "400",
      
    },
 
    party: {
      // padding: 20,
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      marginRight: "6%",
      overflow: "hidden",
    },
    // icon: {
    //   position: "absolute",
    //   right: 20,
    //   flex: 1,
    // }
    image: {
      minWidth: 50,
      minHeight: 50,
      resizeMode: "cover",
      flex: 1,
      // width: 100,
    }
  });

export default styles;
