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
import FeatherIcon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import TopNav from "../topnav/index.js";
import styles from "./styles.js";
import {states} from "../../data/states"

const Search = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [downloaded, setDownloaded] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDownloaded(false);
  }, []);

  // CONGRESS API KEY
// 6e69258c-76a6-4ff3-b5b7-6cc39152fe98
  const requestData = async () => {
    try {
      if (!downloaded) {
        const response = await fetch(
          "https://api.propublica.org/congress/v1/117/senate/members.json",
          {
            method: "GET",
            headers: {
              "X-Api-Key": "boSbGSKgKnoMtdwEjxT0a8Bymy6LaOIaJGWAX0dY ",
              in_office: true,
            },
          }
        );
        const json = await response.json();
        setData(json.results[0].members);
        setDownloaded(true);
      }
    } catch (error) {
      console.log("Nothing In Return");
    } finally {
      setLoading(false);
    }
  };

  //Search
  const [input, setInput] = useState();

  const response =
    data &&
    data
      .filter(function (res) {
        res = res.last_name.toLowerCase() + res.first_name.toLowerCase();
        const filtered = res.includes(input.toLowerCase());
        return filtered;
      })
      .map((i, index) => {
        // console.log(i)
        return (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => {
              navigation.navigate("Profile", {
                i: i,
                index: index,
                params: { screen: "Votes", i: i, index: index },
              });
            }}
          >
            
            {/* {i.party === "R" ? (
              <View style={{ backgroundColor: "red", ...styles.party }}>
                <FontIcon
                  style={{ marginRight: -1 }}
                  name="republican"
                  size={24}
                  color="#ffff"
                />
              </View>
            ) : (
              <View style={{ backgroundColor: "blue", ...styles.party }}>
                <FontIcon
                  // style={styles.democrat}
                  name="democrat"
                  size={24}
                  color="#ffff"
                />
              </View>
            )} */}
            <View style={styles.party}>
              <Image
                style={styles.image}
                source={{
                  // 450x550
                  uri: `https://theunitedstates.io/images/congress/225x275/${i.id}.jpg`,
                }}
              />
            </View>
            <View style={styles.column}>
              
            <View style={styles.titleContainer}>
              <View style={styles.row}>
                
                <Text style={styles.title}>
                  {i.first_name} {i.last_name}
                </Text>
                <Text style={styles.subtitle}>{i.party}</Text>
              </View>
              <Text style={styles.subtitle}>{i.short_title} {states[i.state]} {i.district !== undefined && `District ${i.district}`}</Text>
              
              
            </View>
            <View style={styles.tags}>
            <View style={styles.tag}>
                <Text style={styles.tagtext}>{states[i.state]}</Text>
              </View>
            <View style={styles.tag}>
                <Text style={styles.tagtext}>{(i.title.match("Senator") || i.title.match("Representative"))}</Text>
              </View>
              </View>
              </View>
              {/* </View> */}
            {/* <FeatherIcon
              style={styles.icon}
              name="chevron-right"
              size={30}
              color="#252525"
            /> */}
          </Pressable>
        );
      });

  return (
    <SafeAreaView style={styles.wrapper}>
      <TopNav navigation={ navigation }/>
      <View style={!downloaded ? { ...styles.page } : { ...styles.pageAfter }}>
      <ScrollView>
      <View style={styles.section}>
        <View style={styles.row}>
        <Text style={styles.pagetitle}>Search</Text>
        </View>
        <View style={styles.searchbar}>
          <FeatherIcon
            style={styles.searchbaricon}
            name="search"
            size={20}
            color="#AFB1B7"
          />
          <TextInput
            // style={
            //   !downloaded ? { ...styles.inputAfter } : { ...styles.inputBefore }
            // }
            style={styles.input}
            placeholder="Search Lawmaker, Bill, or Topic"
            placeholderStyle={styles.placeholder}
            textAlign="left"
            value={input}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={() => requestData()}
          />
        </View>
        </View>
        
          <View style={styles.container}>{response}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Search;
