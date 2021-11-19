import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
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



//Return Mapping
let size = 10;

  const response = data && data.slice(0, size).map(i => {
    return <View style={styles.card}>
    <Text style={styles.text}>{i.first_name} {i.last_name}</Text>
  </View>
  })


  return (
    <View>
      <View style={styles.container}>
  {response}
      </View>
      <Pressable
        style={{ position: "fixed", bottom: -600, padding: 30, backgroundColor: "#151515", borderRadius: 100 }}
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
