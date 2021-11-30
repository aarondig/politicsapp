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
import Icon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles.js";

const Profile = ({ route, navigation}) => {
  
  const { i, index } = route.params;
console.log(i)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{
          uri: `https://theunitedstates.io/images/congress/450x550/${i.id}.jpg`,
        }}/>
      </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
