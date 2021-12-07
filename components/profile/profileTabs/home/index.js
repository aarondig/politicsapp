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
  Dimensions,
} from "react-native";
import {
  LineChart,
  ProgressChart,
} from "react-native-chart-kit";

import styles from "./styles.js";
import Scraper from "../../../../routes/api-routes"


const Home = ({ route, navigation}) => {


  return (
    
    <View style={styles.wrapper}>
      
       <View style={styles.innerWrapper}>
      <Text style={styles.header}>Home</Text>
      <View>
      <Pressable style={styles.follow} >
            <Text style={styles.followText}>Follow</Text>
            
          </Pressable>

  
</View>

      </View>
    
    </View>
  
  );
};
export default Home;
