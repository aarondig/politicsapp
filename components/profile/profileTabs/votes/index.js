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



const Votes = ({ route, navigation }) => {

 
  return (
    <View style={styles.wrapper}>
       <View style={styles.innerWrapper}>
      <Text style={styles.header}>VOTES</Text>
      </View>
    </View>
  );
};
export default Votes;
