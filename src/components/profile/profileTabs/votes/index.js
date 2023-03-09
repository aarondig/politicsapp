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

const Votes = ({ route, navigation }) => {
  const { i, index, d, bio, loading } = route.params;


  function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  };

  
  
  return (
    <ScrollView style={styles.wrapper}>
      

        <View style={styles.carousel}>
          <Text style={styles.carouseltitle}>Key Votes</Text>
          <ScrollView style={styles.cardscroll} contentContainerStyle={{
    paddingRight: 32,
  }} horizontal={true}>
            {d.votes.map((el, i) => {
              return (
                <Pressable style={styles.card} key={i} 
                onPress={()=>{ Linking.openURL(el.link)}}>
                  <View style={styles.innercard}>
                    <View style={styles.row}>
                    {el.vote === "Yea" ? (
                      <View style={styles.voteicon_yes}>
                        <FeatherIcon
                          // style={styles.cardicon}
                          name={"thumbs-up"}
                          size={18}
                          color={"#fff"}
                        />
                      </View>
                    ) : (
                      <View style={styles.voteicon_no}>
                        <FeatherIcon
                          // style={styles.cardicon}
                          name={"thumbs-down"}
                          size={18}
                          color={"#fff"}
                        />
                      </View>
                    )}
                    <Text style={styles.title}>{el.num}</Text>
      </View>
          <View style={styles.textc}>
                    <Text style={styles.text}>{truncate(el.title, 62)}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
 

   
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

      {/* </View> */}

      <View style={styles.section}>
        <View style={styles.column}>
          <Text style={styles.title}>Total Votes</Text>
          <Text style={styles.subtitle}>This Term</Text>
        </View>
        <Text style={styles.title}>{i.total_votes}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.column}>
          <Text style={styles.title}>Votes Missed</Text>
          <Text style={styles.subtitle}>This Term</Text>
        </View>
        <Text style={styles.title}>{i.missed_votes}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.column}>
          <Text style={styles.title}>Votes With Party</Text>
          <Text style={styles.subtitle}>Percentage</Text>
        </View>
        <Text style={styles.title}>{i.votes_with_party_pct}%</Text>
      </View>
    </ScrollView>
  );
};
export default Votes;
