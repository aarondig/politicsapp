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
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "8%",
  },
  insightsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "8%",
    marginRight: "8%",
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
