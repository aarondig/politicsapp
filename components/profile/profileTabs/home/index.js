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

const Home = ({ route, navigation }) => {
  const { i, index } = route.params;
  const { data, setData } = useState();
  const cheerio = require("cheerio");
  var list = {};

  const scrapeData = async () => {
    const searchUrl = `https://www.govtrack.us/congress/members/${i.id}`;
    const response = await fetch(searchUrl);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString, {
      xmlMode: true,
      decodeEntities: false,
      normalizeWhitespace: true,
      scriptingEnabled: true,
    });

    //Key Votes Table

    $("#voting-record > div.row > div").each((key, bill) => {
      

      list[key] = {
        num: $(
          `#voting-record > div.row > div:nth-child(${key}) > div > div > div:nth-child(1) > a`
        )
          .text()
          .trim()
          .slice(0, 10)
          .trim(),
        title: $(
          `#voting-record > div.row > div:nth-child(${key}) > div > div > div:nth-child(1) > a`
        )
          .text()
          .trim()
          .slice(10)
          .trim(),
        vote: $(
          `#voting-record > div.row > div:nth-child(${key}) > div > h4 > b`
        )
          .text()
          .trim(),
        date: $(
          `#voting-record > div.row > div:nth-child(${key}) > div > div > div:nth-child(2) > div:nth-child(1)`
        )
          .text()
          .trim().slice(-13, -1).trim(),
        description: $(
          `#voting-record > div.row > div:nth-child(${key}) > div > div > div:nth-child(2)`
        )
          .text()
          .trim().slice(31).trim(),
        status: $(
          `#voting-record > div.row > div:nth-child(${key}) > div > div > div:nth-child(2) > div:nth-child(1)`
        )
          .text()
          .trim().slice(0, 6),
        count: $(
            `#voting-record > div.row > div:nth-child(${key}) > div > div > div:nth-child(2) > div:nth-child(1)`
          )
            .text()
            .trim().slice(7, 14).trim(),
        
      };

      
    });
    console.log(list);
  };
  var sum = scrapeData();
 

  useEffect(() => {});
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <Text style={styles.header}>Home</Text>
        <View>
          <Pressable style={styles.follow} onPress={() => scrapeData()}>
            <Text style={styles.followText}>do something</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Home;
