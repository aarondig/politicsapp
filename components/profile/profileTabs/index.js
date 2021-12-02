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
import Votes from "./votes/index";
import Spending from "./spending/index";
import styles from "./styles.js";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = () => {
  return (
    <Tab.Navigator style={styles.navigator}>
      <Tab.Screen name="Votes" component={Votes} />
      <Tab.Screen name="Spending" component={Spending} />
    </Tab.Navigator>
  );
}
export default ProfileTabs;

// const Votes = ({ route, navigation }) => {
//   const { i, index } = route.params;
//   console.log(i);

 
//   return (
//     <View style={styles.wrapper}>
      
//     </View>
//   );
// };
