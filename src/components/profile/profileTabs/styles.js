import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {},

  tabbar: {
    backgroundColor: "white",
    maxWidth: "100%",
    // height: "13%",
    shadowColor: "#EFEEF1",
    height: 54,
  },

  item: {
  
    minHeight: 50,
  },
  // },
  label: {
  //  fontFamily: "Inter",
   fontSize: 16,
   textTransform: "capitalize",
   fontWeight: "400"
  },
  indicatorContainer: {
    borderBottomWidth: 1,
   borderBottomColor: "#EFEEF1",
  },
  indicator: {
    backgroundColor: "black",
    borderWidth: 0,
    height: 1,
    marginBottom: -1,
  },

  // indicator: {
  //   height:  "100%",
  //   backgroundColor: "black",
  //   borderRadius: 10,
  //   borderWidth: 0,
  //   maxWidth: "75%",
  //   maxHeight: "100%",
  // }
});

export default styles;
