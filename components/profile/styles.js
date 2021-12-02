import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

    backgroundColor: "white",
    flexDirection: "column",
  },

  innerWrapper: {
    flexDirection: "column",
    marginLeft: "5%",
    marginRight: "5%",
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
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "8%",
  },

  imageContainer: {
    minWidth: 110,
    minHeight: 150,
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
    marginBottom: "10%",
  },
  name: {
    width: "100%",
    fontSize: 28,
    fontWeight: "600",
    marginTop: 5,
    textAlign: "left",
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#707070",
  },
  iconRow: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    marginRight: 28,
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
});

export default styles;
