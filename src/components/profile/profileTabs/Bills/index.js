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

import styles from "./styles.js";



const Bills = ({ route, navigation }) => {

 let featured = [];

//  useEffect(()=>{

//  },[])
  return (
    <View style={styles.wrapper}>
       <ScrollView style={styles.carousel}>
        
        <View style={styles.card}>
            {/* <View style={styles.column}>
            <Text style={styles.title}>Total Votes</Text>
            <Text style={styles.subtitle}>This Term</Text>
            </View> */}
            
            {/* <Text style={styles.title}>{i.total_votes}</Text> */}
            </View>
          </ScrollView>
    </View>
  );
};
export default Bills;
