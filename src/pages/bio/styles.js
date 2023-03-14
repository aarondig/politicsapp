import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,

    backgroundColor: "#ffffff",
    flexDirection: "column",
  },

  pagetitle: {
    color: "#111315",
        fontSize: 24,
        fontFamily: "System",
        fontWeight: "500",
        paddingBottom: 18,
        alignItems: "center",
        maxWidth: "60%",
  
  },

  imageContainer: {
    // minWidth: 80,
    // minHeight: 105,
    minWidth: 70,
    minHeight: 70,
    maxHeight: 70,
    maxWidth: 70,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
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
        marginBottom: 8,
        
      },
      text: {
        flex: 1,
        
        color: "#111315",
        fontSize: 14,
        fontFamily: "System",
        fontWeight: "400",
      
        marginBottom: 8,
        lineHeight: 20,
        
      },


});

export default styles;
