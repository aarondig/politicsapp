import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Search from "./components/search/index";

import Profile from "./components/profile/index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  // Stack.navigationOptions.cardStyle = {
  //   backgroundColor: '#FFFFFF'
  // }
  return (
    <NavigationContainer >
    <Stack.Navigator cardStyle={{backgroundColor: '#FFFFFF'}}>
      {/* <Search></Search> */}
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

