import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

    backgroundColor: "white",
    flexDirection: "column",
  },

  innerWrapper: {
    flexDirection: "column",
    marginLeft: 24,
    marginRight: 24,
    marginTop: 28,
  },
  // col: {
  //   maxWidth: 120,
  //   flexDirection: "column",
  // },

  // headerContainer: {
  //   width: "100%",
  //   flexDirection: "row",
  // },
  // headerCol: {
  //   // flex: 1,
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   marginLeft: "8%",
  // },

  imageContainer: {
    // minWidth: 80,
    // minHeight: 105,
    minWidth: 70,
    minHeight: 70,
    maxHeight: 70,
    maxWidth: 70,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  bio: {
    // marginTop: 12,
    marginBottom: 26,
  },
  titleContainer: {
    height: 50,
    flexDirection: "column",
    justifyContent:"center",
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    color: "#111315",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "600",
    paddingBottom: 4,
    letterSpacing: .2,
    
  },
  subtitle: {
    color: "#AFB1B7",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "400",
    letterSpacing: .2,
    
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    
  },
  
  bottomRow: {
    marginTop: "8%",
    marginBottom: "5%",
    width: "100%",
    flexDirection: "row",
    alignItems:"center",
  },
  buttonrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 20,
  
  },
  primarybutton: {
    height: 32,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#111315",
    borderRadius: 8,
    display: "flex",   
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight:6,
    flex: 1,
  },
  secondarybutton: {
    height: 32,
    paddingLeft: 19,
    paddingRight: 19,
    backgroundColor: "#EFF0F3",
    borderRadius: 8,
    display: "flex",   
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight:6,
    flex: 1,
 
  },
  iconbutton: {
    height: 32,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#EFF0F3",
    borderRadius: 8,
    display: "flex",   
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
 
  },

  primarybuttontext: {
    // fontFamily: "Helvetica Neue",
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    margin: 0,
    lineHeight: 16,
  },
  secondarybuttontext: {
    fontSize: 14,
    color: "#111315",
    fontWeight: "500",
    margin: 0,
    lineHeight: 16,
  },




  insightsContainer: {
    flex: 1,
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "8%",
  },
  insight: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
  insightLabel: {
    color: "#707070",
    fontSize: 10,
    marginBottom: 5,
  },
  insightVal: {
    color: "#252525",
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 26,
  },



  p: {
    // marginTop: "3%",
    fontSize: 14,
    fontFamily: "System",
    fontWeight: "400",
    color: "#111315"
  }, 
  link: {
    color: "rgba(13,130,223,0.95)",
    marginTop: 12,
    fontSize: 14,
    fontFamily: "System",
    fontWeight: "300",
    
  },
 
 
  
});

export default styles;
