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
  Linking,
} from "react-native";
import { issues } from "../../../../data/issues.js";

import styles from "./styles.js";
import FeatherIcon from "react-native-vector-icons/Feather";

const Bills = ({ route, navigation }) => {
  const { i, index, d, bio, loading } = route.params;

  //  useEffect(()=>{

  //  },[])
  let maxlimit = 62;


  console.log(d)

  return (
    <View style={styles.wrapper}>
      <View style={styles.carousel}>
        <Text style={styles.carouseltitle}>Recent Sponsored Bills</Text>
        <ScrollView
          style={styles.cardscroll}
          contentContainerStyle={{
            paddingRight: 32,
          }}
          horizontal={true}
        >
          {d.bills.recent.map((el, i) => {
            // let icon = []
            // issues.map((element) => {
            //   if (
            //     el.title.toLowerCase().includes(element.title.toLowerCase())
            //   ) {
            //     return icon.unshift(element);
            //   }
              
            // });
            

            // console.log(icon);

            return (
              <Pressable
                style={styles.card}
                key={i}
                onPress={() => {
                  Linking.openURL(el.link);
                }}
              >
                <View style={styles.innercard}>
                  <View style={styles.row}>
                    {/* if (el.title.toLowerCase().includes("health")) {
                        
                      } */}
                    {/* {icon ? (
                      <View style={{ backgroundColor: "#000", ...styles.icon }}>
                        <FeatherIcon
                          style={styles.cardicon}
                          name={icon[0].icon}
                          size={18}
                          color={"#fff"}
                        />
                      </View>
                    ) : ( */}
                      <View
                        style={styles.icon}
                      >
                        <FeatherIcon
                          style={styles.cardicon}
                          name={"circle"}
                          size={18}
                          color={"#fff"}
                        />
                      </View>
                    {/* )} */}
                    <Text style={styles.title}>{el.num}</Text>
                  </View>
                  <View style={styles.textc}>
                    <Text style={styles.text}>
                      {el.title.length > maxlimit
                        ? el.title.substring(0, maxlimit - 3) + "..."
                        : el.title}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default Bills;
