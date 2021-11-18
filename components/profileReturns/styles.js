import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 40,
      flexWrap: "wrap",
    },
    card: {
        width: "40%",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      shadowColor: "#000",
      margin: 10,
      shadowOffset: {
          width: 0,
          height: 20,
      },
      shadowOpacity: .20,
      shadowRadius: 30,
      
    },
    text: {
      backgroundColor: "red",
      color: "#ffff",
      fontSize: 24,
      padding: 20,
    },
  });

export default styles;
