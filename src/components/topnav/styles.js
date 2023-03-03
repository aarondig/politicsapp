import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
topnav: {
    height: "8%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
  alignItems: "center",
  justifyContent:"space-between",
  // backgroundColor: "#111315",
  borderBottomWidth: 1,
  borderBottomColor: "#EFEEF1",

  },
  right: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  rightnavicon: {
    marginLeft: 0,
   
  },
  navicon: {
    marginLeft: 24,
    fontWeight: "100",

  },
  navuser: {
    height: 32,
    width: 32,
   marginLeft: 24,
    backgroundColor: "#454545",
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navusertext: {
    color: "#fff",
    fontSize: 18,
  },
  
});

export default styles;
