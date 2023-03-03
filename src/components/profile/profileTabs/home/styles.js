import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },

  innerWrapper: {
    flex: 1,
    flexDirection: "column",
    // marginLeft: 24,
    // marginRight: 24,
    // marginTop: 24,
  },
  section: {
    display: "flex",
    flexDirection:"row",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEEF1",
    alignItems: "center"
      },

  column: {
display: "flex",
flexDirection:"column",
flex: 1,
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






  about: {
marginLeft: "3%",
marginRight: "3%",
marginTop: "5%",
marginBottom: "10%",
  },
  header: {
    fontSize: 28,
    fontFamily: "System",
    fontWeight: "600",
    marginBottom: "3%"

  },
  p: {
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "300",
  },


  //Accordians
  acc: {
    width: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 20,
  },
  accTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    marginLeft: "12%",
  },

  //Issues

  issue: {

  },

  follow: {
    width: 110,
    height: 38,
    padding: 10,
    paddingLeft: 19,
    paddingRight: 19,
    backgroundColor: "#252525",
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  followText: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
  },

});

export default styles;
