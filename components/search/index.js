import React, { useEffect, useReducer, useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontIcon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles.js";

const Search = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const requestData = async () => {
    try {
      console.log("PRESS");
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
    } catch (error) {
      console.log("Nothing In Return");
    } finally {
      setLoading(false);
    }
  };

  //Search
  const [input, setInput] = useState();
  // const [filtered, setFiltered] = useState();

  // const searchSubmit = async () => {
  //   setFiltered(data.filter(i => (i.last_name.toLowerCase() || i.first_name.toLowerCase() === input)))

  // }

  //Return Mapping

  // const search = new RegExp(`(?<Name>${input})`)

  // const response =
  //   data &&
  //   data
  //     .filter(function (res) {
  //       if (res.first_name.toLowerCase() === input.toLowerCase()) {
  //         return res;
  //       } else {
  //         return null;
  //       }
  //     })
  //     .map((i) => {
  //       console.log(i);
  //       return (
  //         <View style={styles.card}>
  //           {i.party === "R" ? (
  //             <View style={{ backgroundColor: "red", ...styles.party}}>
  //               <FontIcon
  //                 style={{marginRight: -1}}
  //                 name="republican"
  //                 size={24}
  //                 color="#ffff"
  //               />
  //             </View>
  //           ) : (
  //             <View style={{ backgroundColor: "blue", ...styles.party}}>
  //               <FontIcon
  //                 // style={styles.democrat}
  //                 name="democrat"
  //                 size={24}
  //                 color="#ffff"
  //               />
  //             </View>
  //           )}
  //           <View style={styles.textContainer}>
  //           <Text style={styles.text}>
  //             {i.first_name} {i.last_name}
  //           </Text>
  //           <Text style={styles.subtext}>
  //             {i.title}
  //           </Text>
  //           </View>
            
  //           <Icon
  //             style={styles.icon}
  //             name="chevron-right"
  //             size={30}
  //             color="#252525"
  //           />
  //         </View>
  //       );
  //     });
  const response =
  data &&
  data
    .filter(function(res) {
      res = res.last_name.toLowerCase() + res.first_name.toLowerCase();
      console.log(res);
      const filtered = res.includes(input.toLowerCase())
      return filtered
    })
    .map((i) => {
      
      return (
        <View style={styles.card}>
          {i.party === "R" ? (
            <View style={{ backgroundColor: "red", ...styles.party}}>
              <FontIcon
                style={{marginRight: -1}}
                name="republican"
                size={24}
                color="#ffff"
              />
            </View>
          ) : (
            <View style={{ backgroundColor: "blue", ...styles.party}}>
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
          <Text style={styles.subtext}>
            {i.title}
          </Text>
          </View>
          
          <Icon
            style={styles.icon}
            name="chevron-right"
            size={30}
            color="#252525"
          />
        </View>
      );
    });

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search"
        textAlign="center"
        value={input}
        onChangeText={(text) => setInput(text)}
        // onSubmitEditing={() => searchSubmit()}
        onSubmitEditing={() => requestData()}
      />
      <View style={styles.container}>{response}</View>
      <Pressable
        style={{
          position: "fixed",
          bottom: -600,
          padding: 30,
          backgroundColor: "#151515",
          borderRadius: 100,
        }}
        onPress={() => {
          requestData();
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 28,
            width: "100%",
            textAlign: "center",
          }}
        >
          Request
        </Text>
      </Pressable>
    </View>
  );
};
export default Search;
