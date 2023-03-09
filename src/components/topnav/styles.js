import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

navspacer: {
  backgroundColor: "#111315",
flex: 1,
},
topnav: {
    height:80,
    // minHeight: 90,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
  alignItems: "center",
  justifyContent:"space-between",
  backgroundColor: "#111315",
  borderTopWidth: 1,
  // borderTopColor: "#EFEEF1",
  borderTopColor: "#3C3E40",
 
  },
  right: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "right",
    // marginRight: -24,
    alignItems: "center",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    
    // marginLeft: 24,
    alignItems: "center",
  },
  center: {
    display: "flex",
    flexDirection: "row",
    flex: 2,

    justifyContent:"center",
    // marginLeft: 24,
    alignItems: "center",

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
    fontWeight: 400,
    fontSize: 20,
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    
  },
  lefttext: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 20,
    flex: 1,
    // alignSelf: "center",
    textAlign: "left",
    
  },
  
});

export default styles;
