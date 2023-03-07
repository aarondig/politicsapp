import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import Home from "./home/index";
import Votes from "./votes/index";
import Bills from "./bills/index";
import Spending from "./spending/index";
import styles from "./styles.js";
import { SvgUri } from 'react-native-svg';
// import ProfileIcon from "../../../../assets/Icons"
import Icon from "react-native-vector-icons/Feather";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { load } from "cheerio";
import { View, Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = ({route, navigation, d, bio,loading}) => {
  const {i, index} = route.params;


  const iconSize = 28;


  return (
    <Tab.Navigator initialRouteName="Home" sceneContainerStyle={styles.navigator} screenOptions={{
      tabBarActiveTintColor: '#111315',
      tabBarInactiveTintColor: '#AFB1B7',
      tabBarContentContainerStyle: styles.content,
      tabBarStyle: styles.tabbar, 
      tabBarItemStyle: styles.item, 
      tabBarLabelStyle: styles.label,
      tabBarIndicatorStyle: styles.indicator,
      tabBarIndicatorContainerStyle: styles.indicatorContainer,
      tabBarScrollEnabled: false,
      tabBarShowIcon: true,
      tabBarShowLabel: true,

    }}>
      <Tab.Screen name="Home" component={Home} initialParams={{ i: i, d: d, bio, loading: loading}} options={{
        // tabBarIcon: ({focused}) => (
        //   <Text style={focused ? {color: "#111315", fontWeight: "600"} : {color: "#AFB1B7", fontWeight: "400"}}>Votes</Text>
        //   // <View style={{justifyContent: "center", alignItems: "center"}}>
        //   //   <SvgUri height={iconSize} width={iconSize * 2} uri={"https://raw.githubusercontent.com/aarondig/politicsapp/80c4278a9e580a77baec3bd63fde93cb29334e26/assets/Icons/ProfileIcon.svg"}></SvgUri>
        //   // </View>
        // )
      }}/>
      <Tab.Screen name="Votes" component={Votes} initialParams={{ i: i, d: d, loading: loading}} options={{
        // tabBarIcon: ({focused}) => (
        //   // <View style={{justifyContent: "center", alignItems: "center"}}>
        //   //   <Icon style={{height: iconSize, width: iconSize}}
        //   //         name="check-square"
        //   //         size={iconSize}
        //   //         color={focused ? "#000" : "#a1a1a1"}></Icon>
                  
        //   // </View>
        // )
      }}/>
      <Tab.Screen name="Bills" component={Bills} initialParams={{ i: i, d: d, loading: loading}} options={{
        // tabBarIcon: ({focused}) => (
        //   <View style={{justifyContent: "center", alignItems: "center"}}>
        //     <Icon style={{height: iconSize, width: iconSize}}
        //           name="file-text"
        //           size={iconSize}
        //           color={focused ? "#000" : "#a1a1a1"}></Icon>
        //   </View>
        // )
      }}/>
      {/* <Tab.Screen name="Spending" component={Spending} initialParams={{ i: i, d: d, loading: loading}} options={{
        // tabBarIcon: ({focused}) => (
        //   <View style={{justifyContent: "center", alignItems: "center"}}>
        //     <Icon style={{height: iconSize, width: iconSize}}
        //           name="more-horizontal"
        //           size={iconSize}
        //           color={focused ? "#00000" : "#a1a1a1"}></Icon>
        //   </View>
        // )
      }}/> */}
    </Tab.Navigator>
  );
}
export default ProfileTabs;

