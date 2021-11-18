import React from "react";
import { View, Text, } from "react-native";
import styles from "./styles.js";

const ProfileReturn = () =>  {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>one</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>two</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>three</Text>
      </View>
    </View>
  );
}
export default ProfileReturn;

