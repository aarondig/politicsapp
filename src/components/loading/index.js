import React from "react";
import { View,Text, ActivityIndicator } from "react-native";
import styles from "./styles.js";

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={"small"}/>
    </View>
  );
}
export default Loading;

