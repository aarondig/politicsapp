import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useReducer, useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  Linking
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import styles from "./styles.js";
import TopNav from "../../components/topnav/index"

const Bio = ({ route, navigation }) => {
  const { i, index, d, bio, loading } = route.params;


  

  return (
    <View style={styles.wrapper}>
    <TopNav navigation={navigation} route={route}/>
    <ScrollView>
     
      <SafeAreaView />
      <View style={styles.section}>
        <View style={styles.column}>
        {/* <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  // 450x550
                  uri: `https://theunitedstates.io/images/congress/225x275/${i.id}.jpg`,
                }}
              />
            </View> */}
            <Text style={styles.subtitle}>About</Text>
          <Text style={styles.pagetitle}>{i.first_name + " " + i.last_name}</Text>
          {/* <Text style={styles.subtitle}>This Term</Text> */}
          
          <Text style={styles.text}>{bio}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.column}>
          <Text style={styles.title}>Age</Text>
          <Text style={styles.subtitle}>This Term</Text>
        </View>
        <Text style={styles.title}>{}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.column}>
          <Text style={styles.title}>Votes With Party</Text>
          <Text style={styles.subtitle}>Percentage</Text>
        </View>
        <Text style={styles.title}>{i.votes_with_party_pct}%</Text>
      </View>
    </ScrollView>
    </View>
  );
};
export default Bio;
