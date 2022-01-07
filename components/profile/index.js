<script src="http://localhost:8097"></script>
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Image, Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles.js";
import States from "./states.json";
import ProfileTabs from "./profileTabs/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bills from "./profileTabs/Bills/index.js";

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
    votes: {},
  };

  const [d, setD] = useState(data);
  const [loading, setLoading] = useState(true);

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
      .trim()

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

      data.votes[key + 1] = {
        num: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
        )
          .text()
          .split(": ")[0],
        title: $(
          `#voting-record > div.row > div:nth-child(${index}) > div > div > div:nth-child(1) > a`
        )
          .text()
          .split(": ")[1],
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
      };
    });

    setLoading(false);
  };
  useEffect(() => {
    navigation.navigate("Home", { loading: loading });
  }, [loading]);

  useEffect(() => {
    scrapeData();
    setD(data);
  }, []);
console.log(i)
  return (
    <SafeAreaView style={styles.wrapper}>
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
            <View style={styles.headerCol}>
            <Text style={styles.name}>
                  {i.first_name + " " + i.last_name}
                </Text>
              <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>
                  {i.state + ". " + (i.title.match("Senator") || i.title.match("Representative"))}
                </Text>
                
              </View>

              {/* Icon Row */}

              {/* <View style={styles.iconRow}>
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
              </View> */}
            </View>
            
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
        {loading ? <></> :
        <View style={styles.bio}>
        <Text style={styles.p}>{(d.about).split(". ")[0] + "."}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(i.url)}>{i.url}</Text>
        </View>
        }
      </View>
      <ProfileTabs route={route} d={d} loading={loading} />
    </SafeAreaView>
  );
};
export default Profile;
