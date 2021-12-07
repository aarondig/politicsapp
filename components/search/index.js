import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles.js";

const Search = ({navigation}) => {
  const [data, setData] = useState(null);
  const [downloaded, setDownloaded] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDownloaded(false);
  }, []);

  const requestData = async () => {
    try {
      if (!downloaded) {
        const response = await fetch(
          "https://api.propublica.org/congress/v1/117/senate/members.json",
          {
            method: "GET",
            headers: {
              "X-Api-Key": "boSbGSKgKnoMtdwEjxT0a8Bymy6LaOIaJGWAX0dY ",
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
        return (
          <Pressable style={styles.card} onPress={() => {navigation.navigate('Profile', {i: i, index: index, params: {screen: 'Votes', i: i, index: index}},
          )}}>
            {i.party === "R" ? (
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
            )}
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {i.first_name} {i.last_name}
              </Text>
              <Text style={styles.subtext}>{i.title}</Text>
            </View>

            <Icon
              style={styles.icon}
              name="chevron-right"
              size={30}
              color="#252525"
            />
          </Pressable>
        );
      });

  return (
    <SafeAreaView>
      <View style={!downloaded ? { ...styles.page } : { ...styles.pageAfter }}>
        <TextInput
          style={
            !downloaded ? { ...styles.inputAfter } : { ...styles.inputBefore }
          }
          placeholder="Search"
          textAlign="center"
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={() => requestData()}
        />

        <ScrollView>
          <View style={styles.container}>{response}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Search;
