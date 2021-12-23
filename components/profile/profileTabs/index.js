import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Home from "./home/index";
import Votes from "./votes/index";
import Spending from "./spending/index";
import styles from "./styles.js";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = ({route, navigation}) => {
  const { i, index } = route.params;
  return (
    <Tab.Navigator style={styles.navigator}>
      <Tab.Screen name="Home" component={Home} initialParams={{ i: i }}/>
      <Tab.Screen name="Votes" component={Votes} initialParams={{ i: i }}/>
      <Tab.Screen name="Spending" component={Spending} initialParams={{ i: i }}/>
    </Tab.Navigator>
  );
}
export default ProfileTabs;


 
//   return (
//     <View style={styles.wrapper}>
      
//     </View>
//   );
// };
