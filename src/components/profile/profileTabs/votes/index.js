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


import styles from "./styles.js";



const Votes = ({ route, navigation}) => {

// const {i, index} = route.params;


  return (
    
    <View style={styles.wrapper}>
      
       <View style={styles.innerWrapper}>
      <Text style={styles.header}>votes</Text>
      <View>
   
      {/* <View style={styles.insightsContainer}>
            <View style={styles.insight}>
              <Text style={styles.insightLabel}>Party</Text>
              <Text style={styles.insightVal}>{i.party}</Text>
            </View>

            <View style={styles.insight}>
              <Text style={styles.insightLabel}>Votes</Text>
              <Text style={styles.insightVal}>{i.total_votes}</Text>
            </View>
            <View style={styles.insight}>
              <Text style={styles.insightLabel}>Next Election</Text>
              <Text style={styles.insightVal}>{i.next_election}</Text>
            </View>
          </View> */}
        
  {/* <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  /> */}
  
</View>

      </View>
    
    </View>
  
  );
};
export default Votes;
