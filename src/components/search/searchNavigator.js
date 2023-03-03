import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Search from "./index";

import Profile from "../profile/index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeatherIcon from "react-native-vector-icons/Feather";
import styles from "./styles";


export default function App() {

  const Stack = createNativeStackNavigator();
 



  return (
    <NavigationContainer>
    <Stack.Navigator cardStyle={{backgroundColor: '#111315'}} >
      
      <Stack.Screen name="Search" component={Search} options={{
        //  headerRight: () => headerRight(),
         
          headerStyle: {
            backgroundColor: '#111315',
   
            shadowOpacity: 0,
          
           
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
           
          },
        headerShown: false,
        }}/>
      <Stack.Screen name="Profile" component={Profile} options={{
          // title: '',
          headerStyle: {
            backgroundColor: '#fff',
            shadowOpacity: 0,
            shadowColor: "#fff",
            borderColor: "#fff",
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            
          },
          headerShown: false,
        }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

