<script src="http://localhost:8097"></script>;
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
import Icon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles.js";
import ProfileTabs from "./profileTabs/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TopNav from "../topnav/index.js";
import { states } from "../../data/states.js";

const Profile = ({ route, navigation }) => {
  const { i, index } = route.params;

  // GovTrack Scrapper
  const cheerio = require("cheerio");
  var data = {
    about: {},
    bills: {
      issues: {},
      recent: {},
      disclaimer: {},
    },
    votes: [],
  };

  const [d, setD] = useState(data);
  const [loading, setLoading] = useState(true);

  const [bio, setBio] = useState();
  const [shortBio, setShortBio] = useState();

  const scrapeData = async () => {
    const searchUrl = `https://www.govtrack.us/congress/members/${i.id}`;
    const response = await fetch(searchUrl);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString, {
      normalizeWhitespace: true,
    });
    //About
    data.about = $("#track_panel_base > div > p")
      .text()
      .replace(/\s+/g, " ")
      .replace("(view map) ", "")
      .trim();

    // Bills
    // Issue Areas
    $("#sponsorship > p:nth-child(4) > span").each((key, item) => {
      var index = key + 1;

      data.bills.issues[index] = {
        area: $(`#sponsorship > p:nth-child(4) > span:nth-child(${index}) > a`)
          .text()
          .trim(),
        percent: $(`#sponsorship > p:nth-child(4) > span:nth-child(${index})`)
          .text()
          .trim()
          .slice(-5)
          .trim()
          .replace("(", "")
          .replace(")", ""),
      };
    });
    //Recent Bills
    $("#sponsorship > ul > li").each((key, item) => {
      var index = key + 1;
      data.bills.recent[index] = {
        num: $(`#sponsorship > ul > li:nth-child(${key}) > a`)
          .text()
          .split(": ")[0],
        title: $(`#sponsorship > ul > li:nth-child(${key}) > a`)
          .text()
          .split(": ")[1],
      };
    });
    //Disclaimer
    data.bills.disclaimer = $("#sponsorship > p:nth-child(9)").text().trim();

    //Votes
    // Key Votes
    $("#voting-record > div.row > div").each((key, bill) => {
      var index = key + 1;

      data.votes.push({
        num: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
        )
          .text().includes(":") ? ($(
            `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
          )
            .text().includes("Nomination") ? "Nomination" : $(
            `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
          )
            .text()
            .split(": ")[0].split("(")[0]) : null,
        title: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
        )
          .text().includes(":") ? $(
            `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
          )
            .text().split(": ")[1] : $(
              `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
            )
            .text(),
        vote: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > h4 > b`
        ).text(),
        date: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(2) > div:nth-child(1)`
        )
          .text()
          .trim()
          .slice(-13, -1)
          .trim(),
        description: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(2)`
        )
          .text()
          .trim()
          .slice(31)
          .trim(),
        status: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(2) > div:nth-child(1)`
        )
          .text()
          .split(" ")[0],
        count: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(2) > div:nth-child(1)`
        )
          .text()
          .trim()
          .split(" ")[1],
          link: "https://www.govtrack.us/" + $(
            `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
          ).attr('href'),
      });
    });
    scrapeCallback();
  };
  useEffect(() => {
    navigation.navigate("Home", { loading: loading });
  }, [loading]);

  useEffect(() => {
    scrapeData();
    setD(data);
    console.log(data)
  }, []);

  const scrapeCallback = () => {
    const bioSplit = d.about.split(". ")[0] + ".";
    setShortBio(bioSplit);
    setBio(d.about.replace(bioSplit + " ", ""));

    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <TopNav navigation={ navigation }/>
      <View style={styles.innerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.col}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  // 450x550
                  uri: `https://theunitedstates.io/images/congress/225x275/${i.id}.jpg`,
                }}
              />
            </View>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
          >
            {/* <View style={styles.headerCol}>
              <Text style={styles.name}>
                  {i.first_name + " " + i.last_name}
                </Text>
              <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>
                  {i.state + ". " + (i.title.match("Senator") || i.title.match("Representative"))}
                </Text>
              </View>

              Icon Row
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
            </View> */}
          </View>
        </View>

        {/* <View style={styles.bottomRow}>
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
              <Text style={styles.insightVal}>{i.next_election}</Text>
            </View>
          </View>
        </View> */}



{/*         
        {loading ? (
          <></>
        ) : ( */}
          <View style={styles.bio}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {i.first_name + " " + i.last_name}
              </Text>
              <Text style={styles.subtitle}>
                {i.title.match("Senator") || i.title.match("Rep")} of{" "}
                {states[i.state]}{" "}
                {i.district !== undefined && `District ${i.district}`}
              </Text>
            </View>
            <Text style={styles.p}>{shortBio}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(i.url)}>
              
              
              {i.short_title === "Sen." ? i.url.split(".")[1] + "." + i.url.split(".")[2] + "." + i.url.split(".")[3] : i.url.split("://")[1]}
            </Text>
          </View>
        {/* )} */}
        <View style={styles.buttonrow}>
        <Pressable style={styles.primarybutton}>
            <Text style={styles.primarybuttontext}>Follow</Text>
            {/* <Icon name="plus" size={18} color="#ffffff"></Icon> */}
          </Pressable>
          <Pressable style={styles.secondarybutton}>
            <Text style={styles.secondarybuttontext}>Share Profile</Text>
            {/* <Icon name="plus" size={18} color="#ffffff"></Icon> */}
          </Pressable>
          <Pressable style={styles.iconbutton}>
            {/* <Text style={styles.secondarybuttontext}>Share Profile</Text> */}
            <Icon name="plus" size={18} color="#111315"></Icon>
          </Pressable>
         
          
          </View>
      </View>
      
      <ProfileTabs route={route} d={d} bio={bio} loading={loading} />
    </SafeAreaView>
    
  );
};
export default Profile;
