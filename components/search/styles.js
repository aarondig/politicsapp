import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 40,
      flexWrap: "wrap",
    },
    // {
    //   flex: 1,
    //   flexDirection: "row",
    //   justifyContent: "center",
    //   paddingTop: 40,
    //   flexWrap: "wrap",
    // },
    card: {
      width: "100%",
      backgroundColor: "#ffff",
      alignItems: "center",
      flexDirection: "row",
      padding: 20,
      shadowColor: "#000",
      margin: 5,

      
    },
    
    // {
    //     width: "44%",
    //   backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   padding: 20,
    //   shadowColor: "#000",
    //   marginTop: 15,
    //   margin: 10,
    //   shadowOffset: {
    //       width: 0,
    //       height: 20,
    //   },
    //   shadowOpacity: .20,
    //   shadowRadius: 30,
      
    // },
    textContainer: {
      width: "70%",
      flexDirection: "column",

    },
    text: {
      color: "#252525",
      fontSize: 18,
      fontFamily: "poppins",
      fontWeight: "600",
      paddingBottom: 10,
      
    },
    subtext: {
      color: "#252525",
      fontSize: 12,
      fontFamily: "poppins",
      fontWeight: "400",
      
    },
    input: {
      height: "20%",
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    },
    party: {
      padding: 10,
      width: "15%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginRight: "8%",
    },
    icon: {
      position: "absolute",
      right: 20,
    }
  
      


  
  });

export default styles;
