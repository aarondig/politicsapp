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
  FlatList,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import TopNav from "../topnav/index.js";
import styles from "./styles.js";
import { states } from "../../data/states";

const Search = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const [recent, setRecent] = useState([]);
  const [downloaded, setDownloaded] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDownloaded(false);
  }, []);
  // Fetching Data from Propublica API
  let members = [];
  let filtered = [];
  // let recent = [];

  const requestData = async () => {
    try {
      if (!downloaded) {
        const response = await Promise.all([
          fetch(
            "https://api.propublica.org/congress/v1/117/senate/members.json",
            {
              method: "GET",
              headers: {
                "X-Api-Key": "boSbGSKgKnoMtdwEjxT0a8Bymy6LaOIaJGWAX0dY ",
                in_office: true,
              },
            }
          ),
          fetch(
            "https://api.propublica.org/congress/v1/117/house/members.json",
            {
              method: "GET",
              headers: {
                "X-Api-Key": "boSbGSKgKnoMtdwEjxT0a8Bymy6LaOIaJGWAX0dY ",
                in_office: true,
              },
            }
          ),
        ]).then(function (responses) {
          // Get a JSON object from each of the responses
          return Promise.all(
            responses.map((res) => {
              return res.json();
            })
          );
        });

        await response.map((element, index) => {
          element.results[0].members.map((el, i) => {
            members.push(el);
          });
        });
        await setData(members);
        await setDownloaded(true);
      }
    } catch (error) {
      console.log("Nothing In Return");
    } finally {
      setLoading(false);
    }
  };

  //Search
  const [input, setInput] = useState("");

  // const Filtered = () => data &&
  //   data
  //     .filter(function(res) {
  //       filter = res.first_name.toLowerCase() + " " + res.last_name.toLowerCase();
  //       const filtered = filter.includes(input.toLowerCase());
  //       return filtered;
  //     })
  //     .map((i, index) => {
  //       return (
  //         <Pressable
  //           key={index}
  //           style={styles.card}
  //           onPress={() => {
  //             navigation.navigate("Profile", {
  //               i: i,
  //               index: index,
  //               params: { screen: "Votes", i: i, index: index },
  //             });
  //           }}
  //         >
  //           <View style={styles.party}>
  //             <Image
  //               style={styles.image}
  //               source={{
  //                 // 450x550
  //                 uri: `https://theunitedstates.io/images/congress/225x275/${i.id}.jpg`,
  //               }}
  //             />
  //           </View>
  //           <View style={styles.column}>

  //           <View style={styles.titleContainer}>
  //             <View style={styles.row}>

  //               <Text style={styles.title}>
  //                 {i.first_name} {i.last_name}
  //               </Text>
  //               <Text style={styles.subtitle}>{i.party}</Text>
  //             </View>
  //             <Text style={styles.subtitle}>{i.short_title} {states[i.state]} {i.district !== undefined && `District ${i.district}`}</Text>

  //           </View>
  //           <View style={styles.tags}>
  //           <View style={styles.tag}>
  //               <Text style={styles.tagtext}>{states[i.state]}</Text>
  //             </View>
  //           <View style={styles.tag}>
  //               <Text style={styles.tagtext}>{(i.title.match("Senator") || i.title.match("Representative"))}</Text>
  //             </View>
  //             </View>
  //             </View>

  //         </Pressable>
  //       );

  //     })

  // Filtering
  useEffect(() => {
    if (data) {
      filtered = [];
      data
        .filter(function (response) {
          filter =
            response.first_name.toLowerCase() +
            " " +
            response.last_name.toLowerCase();
          const res = filter.includes(input.toLowerCase());
          return res;
        })
        .map((el, i) => {
          filtered.push(el);
        });
    }

    if (input === "") {
      setItems([]);
    } else {
      setItems(filtered);
    }
    // setItems(filtered)
  }, [input]);

  // const header = () => {
  //   return (<View style={styles.section}>
  //     <View style={styles.row}>
  //       <Text style={styles.pagetitle}>Search</Text>
  //     </View>
  //     <View style={styles.searchbar}>
  //       <FeatherIcon
  //         style={styles.searchbaricon}
  //         name="search"
  //         size={20}
  //         color="#AFB1B7"
  //       />
  //       <TextInput
  //         // style={
  //         //   !downloaded ? { ...styles.inputAfter } : { ...styles.inputBefore }
  //         // }
  //         style={styles.input}
  //         // placeholder="Search Lawmaker, Bill, or Topic"
  //         placeholder="Search Lawmaker"
  //         placeholderStyle={styles.placeholder}
  //         textAlign="left"
  //         value={input}
  //         onChangeText={(text) => setInput(text)}
  //         // onSubmitEditing={() => requestData()}
  //       />
  //     </View>
  //   </View>)
  // }
  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        key={index}
        style={styles.card}
        onPress={() => {
          navigation.navigate("Profile", {
            i: item,
            index: index,
            pagetitle: item.first_name + " " + item.last_name,
            // params: { screen: "Votes", i: item, index: index },
          });
        }}
      >
        <View style={styles.party}>
          {/* 450x550 */}
          <Image
            style={styles.image}
            source={{
              uri: `https://theunitedstates.io/images/congress/225x275/${item.id}.jpg`,
            }}
          />
        </View>
        <View style={styles.column}>
          <View style={styles.titleContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.first_name} {item.last_name}
              </Text>
              <Text style={styles.subtitle}>{item.party}</Text>
            </View>
            <Text style={styles.subtitle}>
              {item.short_title} {states[item.state]}{" "}
              {item.district !== undefined && `District ${item.district}`}
            </Text>
          </View>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Text style={styles.tagtext}>{states[item.state]}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagtext}>
                {item.title.match("Senator") ||
                  item.title.match("Representative") ||
                  item.title.match("Delegate")}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const handleEmpty = () => {
    return input !== "" ? <View style={styles.section}>
          <Text style={styles.subtitle}>No results found for "{input}"</Text>
        </View> 
      : <View style={styles.section}>
      <Text style={styles.title}>Popular Searches</Text>
      </View> 
      
   
  };

  // Startup
  useEffect(() => {
    requestData();
  }, []);

  return (
    <View style={styles.wrapper}>
      <TopNav navigation={navigation} />
      <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.row}>
          {/* <Text style={styles.pagetitle}>Search</Text> */}
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
            // placeholder="Search Lawmaker, Bill, or Topic"
            placeholder="Search Lawmaker"
            placeholderStyle={styles.placeholder}
            placeholderTextColor="#AFB1B7"
            textAlign="left"
            value={input}
            onChangeText={(text) => setInput(text)}
            // onSubmitEditing={() => requestData()}
          />
        </View>
      </View>
      </SafeAreaView>
      {/* <View style={!downloaded ? { flex: 1, ...styles.page } : { flex: 1, ...styles.pageAfter }}> */}
      {/* <ScrollView> */}
      {items && (
        <FlatList
          data={items}
          extraData={items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          // ListHeaderComponent={header}
          ListEmptyComponent={handleEmpty}
          maxToRenderPerBatch={5}
        />
      )}
      {/* <View style={styles.container}>
          
            <Filtered/>
          </View> */}
      {/* </ScrollView> */}
      {/* </View> */}
    </View>
  );
};
export default Search;
