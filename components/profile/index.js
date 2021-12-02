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
import Icon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles.js";
import States from "./states.json";
import ProfileTabs from "./profileTabs/index";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Profile = ({ route, navigation }) => {
  const { i, index } = route.params;
  console.log(i);

  var data = Object.entries(States);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.col}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://theunitedstates.io/images/congress/450x550/${i.id}.jpg`,
                }}
              />
            </View>
          </View>
          <View style={styles.headerCol}>
            <View style={styles.titleContainer}>
              {/* <Text style={styles.subtitle}>
              {
                data.filter(function([key, value]){if (key === i.state) {
                 return value;
                }})
              }
            </Text> */}
              <Text style={styles.subtitle}>
                {/* {i.title.match("Senator") || i.title.match("Representative")} */}
                {i.short_title + " " + i.state}
              </Text>
              <Text style={styles.name}>
                {i.first_name + " " + i.last_name}
              </Text>
            </View>
            <View style={styles.iconRow}>
              <Pressable style={styles.style}>
                <Icon
                  style={styles.icon}
                  name="phone"
                  size={26}
                  color="#252525"
                />
              </Pressable>
              <Pressable style={styles.style}>
                <Icon
                  style={styles.icon}
                  name="twitter"
                  size={26}
                  color="#252525"
                />
              </Pressable>
              <Pressable style={styles.style}>
                <Icon
                  style={styles.icon}
                  name="share"
                  size={26}
                  color="#252525"
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.bottomRow}>
          <Pressable style={styles.follow}>
            <Text style={styles.followText}>Follow</Text>
            <Icon name="plus" size={18} color="#ffffff"></Icon>
          </Pressable>
          <View style={styles.insightsContainer}>
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
              <Text style={styles.insightVal}>
                {i.next_election}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ProfileTabs>

      </ProfileTabs>
    </SafeAreaView>
  );
};
export default Profile;
