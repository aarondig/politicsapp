import React, {useState} from "react";
import Search from "./src/components/search/index";

import Profile from "./src/components/profile/index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from "./src/pages/landing";
import Bio from "./src/pages/bio";



export default function App() {

  const Stack = createNativeStackNavigator();
 



  return (
    <NavigationContainer>
    <Stack.Navigator cardStyle={{backgroundColor: '#111315'}} >
      {/* <Stack.Screen name="Landing" component={Landing} options={{
          //  headerRight: () => headerRight(),
          
            // headerStyle: {
            //   backgroundColor: '#111315',
    
            //   shadowOpacity: 0,
            
            
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            
            // },
          headerShown: false,
          }}/> */}
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
        <Stack.Screen name="Bio" component={Bio} options={{
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

