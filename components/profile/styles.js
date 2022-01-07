import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

    backgroundColor: "white",
    flexDirection: "column",
  },

  innerWrapper: {
    flexDirection: "column",
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "8%",
  },
  col: {
    maxWidth: 120,
    flexDirection: "column",
  },

  headerContainer: {
    width: "100%",
    flexDirection: "row",
  },
  headerCol: {
    // flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "8%",
  },

  imageContainer: {
    minWidth: 80,
    minHeight: 105,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius: 15,
    // borderWidth: 10,
    // borderColor: "red",
  },

  titleContainer: {
    justifyContent: "center",
    flexDirection: "column",
    
  },
  name: {
    fontSize: 28,
    fontFamily: "System",
    fontWeight: "600",
    marginTop: 5,
    textAlign: "left",
    flexWrap: "wrap",
    marginBottom: "4%",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#707070",
    marginLeft: 2,
    
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
    fontFamily: "Helvetica Neue",
    fontSize: 15,
    color: "white",
    fontWeight: "600",
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


  bio: {
    marginTop: "4%",
    marginBottom: "8%",
  },
  p: {
    marginTop: "3%",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "300",
    
  }, 
  link: {
    color: "rgba(13,130,223,0.95)",
    marginTop: "3%",
    fontSize: 16,
    fontFamily: "System",
    fontWeight: "300",
    
  },
 
 
  
});

export default styles;
