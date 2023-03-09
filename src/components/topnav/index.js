import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import styles from "./styles.js";
import FeatherIcon from "react-native-vector-icons/Ionicons";

const TopNav = ({ route, navigation }) => {

if (route !== undefined) {
  const { i, pagetitle } = route.params;
  console.log(i)
}
 
  

  return (
  <View>
  <SafeAreaView style={styles.navspacer}/>
    <View style={styles.topnav}>

   
      {route !== undefined ?
       <>
      <View style={styles.left}>
        {/* <Text style={styles.navusertext}>govtrack</Text> */}
       
        <Pressable onPress={() => {
              navigation.navigate("Search")}}>
        <FeatherIcon
      style={styles.rightnavicon}
      name="ios-chevron-back-outline"
      size={26}
      color="#AFB1B7"
      // iconStyle={{innerWidth: 1.2}}
    />
    </Pressable>
      </View>
      <View style={styles.center}>
        <Text style={styles.navusertext} numberOfLines={1}>{route.params.pagetitle}</Text>
        
       
      </View>
      <View style={styles.right}>
        {/* <Text style={styles.navusertext}>{route.params.pagetitle}</Text> */}
        
        {/* <Text style={styles.navusertext}>{route.params.pagetitle}</Text> */}
      </View>
   </> : <>
   <View style={styles.left}>
        <Text style={styles.lefttext}>govtrack</Text>
       
        
      </View><View style={styles.right}>
    <FeatherIcon
      style={styles.navicon}
      name="ios-search-outline"
      size={26}
      color="#AFB1B7"
    />
    <View style={styles.navuser}>
      <Text style={styles.navusertext}>A</Text>
    </View>

    <FeatherIcon
      style={styles.navicon}
      name="ios-menu-outline"
      size={26}
      color="#AFB1B7"
    />
    </View></> }
    </View>

</View>
)
}
export default TopNav;

