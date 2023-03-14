import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import styles from "./styles.js";
import FeatherIcon from "react-native-vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg"

let strokecolor = "#111315"

const SvgComponent = (props) => (
  <Svg
    width={46}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M28.75 11.5c6.351 0 11.5 5.149 11.5 11.5s-5.149 11.5-11.5 11.5-11.5-5.149-11.5-11.5 5.149-11.5 11.5-11.5Z"
      stroke={strokecolor}
      strokeWidth={3.833}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.25 11.5c6.351 0 11.5 5.149 11.5 11.5s-5.149 11.5-11.5 11.5S5.75 29.351 5.75 23s5.149-11.5 11.5-11.5Z"
      stroke={strokecolor}
      strokeWidth={3.833}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)



const TopNav = ({ route, navigation }) => {

if (route !== undefined) {
  const { i, pagetitle } = route.params;

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
              navigation.goBack()}}>
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
        <Text style={styles.lefttext} numberOfLines={1}>{route.params.pagetitle}</Text>
        
       
      </View>
      <View style={styles.right}>
        {/* <Text style={styles.navusertext}>{route.params.pagetitle}</Text> */}
        
        {/* <Text style={styles.navusertext}>{route.params.pagetitle}</Text> */}
      </View>
   </> : <>
   <View style={styles.left}>
        <SvgComponent/>
       
        
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

