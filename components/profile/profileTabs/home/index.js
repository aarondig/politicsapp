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
import { TabBarItem } from "react-native-tab-view";

import styles from "./styles.js";

const Home = ({ route, navigation}) => {
  const { i, index, d, loading} = route.params;

// const Issues = () => {
//   Object.keys(d.bills.issues).map((item, key) => {
// console.log(item)
//     return <View style={styles.issue} key={key}>
//       <View style={styles.iHeaderC}>
//       <Text style={styles.iHeaderST}>{d.bills.issues[key]}</Text>
//       <Text style={styles.iHeaderT}>{d.bills.issues[key]}</Text>
//       </View>
//     </View>
//   })
// }

  return (
    <View style={styles.wrapper}>
      {loading ? <></> :
      <View style={styles.innerWrapper}>
        <View style={styles.about}>
       <Text style={styles.header}>About</Text>
        <Text style={styles.p}>{d.about}</Text>
        </View>
        <View style={styles.issues}>
        {/* <Text style={styles.header}>Sponsored Issues</Text>
        <Issues/> */}
        </View>
      
      </View>
      }
    </View>
    
  );
};
export default Home;


{/* <View style={styles.}> */}
          {/* <Pressable style={styles.follow} onPress={() => {}}>
            <Text style={styles.followText}>do something</Text>
          </Pressable> */}
        {/* </View> */}