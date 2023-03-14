import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    backgroundColor: "#111315",
    // width: "100%",
    // minHeight: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
  },
  graphic: {
    // backgroundColor: "#111315",
    marginTop: 48,
    display:"flex",
    flexDirection: "row",
    justifyContent:"center",
    alignContent: "center",
  },
  svg: {
    flex: 1,
  },
  section: {
    flex: 1,
    display: "flex",
    flexDirection:"column",
  
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#EFEEF1",
    // alignItems: "center"
      },
  title: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "System",
    fontWeight: "500",
    marginBottom: 24,
    textAlign: "center",
    
  },
  subtitle: {
    color: "#AFB1B7",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 24,
  },
  text: {
    flex: 1,
    backgroundColor: "#111315",
  },
  mainbutton: {
    flex: 1,
    backgroundColor: "#111315",
    marginLeft: 24,
    marginRight: 24,
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    // alignContent: "center",
    borderColor: "#3C3E40",
    borderWidth: 2,
    borderRadius: 100,
    maxHeight: 64,
    marginBottom: 48,
    
  },
  buttontext: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "500",
    textAlign: "center",
    
    
  },
});

export default styles;
