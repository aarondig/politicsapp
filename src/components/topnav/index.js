import React from "react";
import { View,Text, Pressable } from "react-native";
import styles from "./styles.js";
import FeatherIcon from "react-native-vector-icons/Feather";

const TopNav = ({ navigation }) => {

  return (<View style={styles.topnav}>
      <View style={styles.left}>
        {/* <Text style={styles.navusertext}>govtrack</Text> */}
        <Pressable onPress={() => {
              navigation.navigate("Search")}}>
        <FeatherIcon
      style={styles.rightnavicon}
      name="arrow-left"
      size={26}
      color="#AFB1B7"
    />
    </Pressable>
      </View>
  <View style={styles.right}>
    <FeatherIcon
      style={styles.navicon}
      name="search"
      size={26}
      color="#AFB1B7"
    />
    <View style={styles.navuser}>
      <Text style={styles.navusertext}>A</Text>
    </View>

    <FeatherIcon
      style={styles.navicon}
      name="menu"
      size={26}
      color="#AFB1B7"
    />
    </View>
</View>
)
}
export default TopNav;

