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
    marginLeft: "8%",
    marginRight: "8%",
    marginTop: "8%",
  },
  about: {

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
